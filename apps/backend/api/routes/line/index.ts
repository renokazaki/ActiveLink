import { Hono } from 'hono';
//👷開発用
// import { config } from 'dotenv';
// // .envファイルを読み込む
// config();

// 以下はline.tsファイルから
import axios from 'axios';
import { cors } from 'hono/cors';

interface LineMessageApiConfig {
  channelAccessToken: string;
  userId: string;
}

// LINE API設定
const lineConfig: LineMessageApiConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  userId: process.env.LINE_USER_ID || '',
};

// メッセージ送信関数
async function sendLineMessage(value: string) {
  // 設定チェック
  if (!lineConfig.channelAccessToken) {
    throw new Error('LINE_CHANNEL_ACCESS_TOKEN is not set in environment variables');
  }

  if (!lineConfig.userId) {
    throw new Error('LINE_USER_ID is not set in environment variables');
  }

  // メッセージオブジェクト
  const message = {
    to: lineConfig.userId,
    messages: [
      {
        type: 'text',
        text: value,
      },
    ],
  };

  // LINE Messaging APIにリクエスト
  try {
    // タイムアウトを短く設定して早期失敗を可能に
    const response = await axios.post('https://api.line.me/v2/bot/message/push', message, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lineConfig.channelAccessToken}`,
      },
    });

    console.log('LINE API response:', response.status, response.statusText);
    return response.data;
  } catch (error) {
    // エラー情報の詳細なロギング
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        code: error.code,
        timeout: error.code === 'ECONNABORTED',
      });
    }
    throw error;
  }
}

const line = new Hono()
// CORSミドルウェアを追加
.use('/*', cors({
  origin: ["*", "http://localhost:3000", "https://active-link.vercel.app","https://active-link.vercel.app/line"],  // 本番とローカル両方を許可
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: true,  // 必要に応じて
}))


// メッセージ送信エンドポイント
.post('/send-message', async (c) => {
  try {
    // リクエストボディからメッセージを取得
    const body = await c.req.json();
    const message = body.message;
    
    if (!message) {
      return c.json({ 
        success: false, 
        message: 'メッセージが指定されていません' 
      }, 400);
    }

    // デバッグ情報
    console.log('Received message request:', message);
    
    // メッセージを送信
    const result = await sendLineMessage(message);
    
    // 成功レスポンス
    return c.json({ 
      success: true, 
      message: 'メッセージを送信しました！'
    });
  } catch (error) {
    // エラーハンドリング
    console.error('Error sending LINE message:', error);
    
    let statusCode = 500;
    let errorMessage = '不明なエラーが発生しました';
    
    // エラータイプに応じたメッセージ
    if (error instanceof Error) {
      errorMessage = error.message;
      
      // タイムアウトエラーの特定
      if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
        statusCode = 504;
        errorMessage = 'LINE API呼び出しがタイムアウトしました';
      }
      
      // 認証エラーの特定
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        statusCode = 401;
        errorMessage = 'LINE API認証エラー: チャネルアクセストークンを確認してください';
      }
    }
    
    return c.json({ 
      success: false, 
      message: 'メッセージ送信に失敗しました。', 
      error: errorMessage 
    }, 500);
  }
});

export default line
