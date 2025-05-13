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
  const response = await axios.post('https://api.line.me/v2/bot/message/push', message, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${lineConfig.channelAccessToken}`,
    },
  });

  return response.data;
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
  const { message } = await c.req.json();
  try {
    const result = await sendLineMessage(message);
    return c.json({ success: true, message: 'メッセージを送信しました！' });
  } catch (error) {
    console.error('Error sending LINE message:', error);
    return c.json({ success: false, message: 'メッセージ送信に失敗しました。' }, 500);
  }
});

export default line
