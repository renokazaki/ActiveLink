import { Hono } from 'hono';
//👷開発用
// import { config } from 'dotenv';
// // .envファイルを読み込む
// config();



interface LineMessageApiConfig {
  channelAccessToken: string;
  userId: string;
}

// LINE API設定
const lineConfig: LineMessageApiConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
  userId: process.env.LINE_USER_ID!
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
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lineConfig.channelAccessToken}`,
      },
      body: JSON.stringify(message),
    });

    console.log('LINE API response:', response.status, response.statusText);
    return response;
  } catch (error) {
    console.error('Error sending LINE message:', error);
  }
}

const line = new Hono()

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
    }
    
    return c.json({ 
      success: false, 
      message: 'メッセージ送信に失敗しました。', 
      error: errorMessage 
    }, 500);
  }
});

export default line
