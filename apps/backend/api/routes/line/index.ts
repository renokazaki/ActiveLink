import { Hono } from 'hono';
//👷開発用
// import { config } from 'dotenv';
// // .envファイルを読み込む
// config();

interface LineMessageApiConfig {
  channelAccessToken: string;
  userId: string;
  loginChannelId: string;
  loginChannelSecret: string;
}

// LINE API設定
const lineConfig: LineMessageApiConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
  userId: process.env.LINE_USER_ID!,
  loginChannelId: process.env.LINE_LOGIN_CHANNEL_ID!,
  loginChannelSecret: process.env.LINE_LOGIN_CHANNEL_SECRET!,
};



// 特定ユーザーのLINEにメッセージ送信
async function sendLineMessageToUser(userId: string, message: string) {
  if (!lineConfig.channelAccessToken) {
    throw new Error('LINE_CHANNEL_ACCESS_TOKEN is not set in environment variables');
  }

  const messagePayload = {
    to: userId,
    messages: [
      {
        type: 'text',
        text: message,
      },
    ],
  };

  try {
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lineConfig.channelAccessToken}`,
      },
      body: JSON.stringify(messagePayload),
    });

    console.log('LINE API response to user:', response.status, response.statusText);
    return response;
  } catch (error) {
    console.error('Error sending LINE message to user:', error);
    throw error;
  }
}

const line = new Hono()



// 特定ユーザーのLINEにメッセージ送信
.post('/send-to-user', async (c) => {
  try {
    const { lineUserId, message, senderName } = await c.req.json();

    if (!lineUserId || !message) {
      return c.json({ 
        success: false, 
        message: 'lineUserId and message are required' 
      }, 400);
    }

    console.log(`📱 Sending message to LINE user: ${lineUserId}`);
    console.log(`📝 Message: ${message}`);
    console.log(`👤 Sender: ${senderName}`);

    // 送信者名がある場合は署名を追加
    const formattedMessage = senderName 
      ? `${message}\n\n- ${senderName}より`
      : message;

    await sendLineMessageToUser(lineUserId, formattedMessage);

    return c.json({
      success: true,
      message: '✅ メッセージを送信しました！'
    });

  } catch (error) {
    console.error('❌ Error in send-to-user:', error);
    return c.json({
      success: false,
      message: 'メッセージ送信に失敗しました',
      error: error instanceof Error ? error.message : '不明なエラー'
    }, 500);
  }
})



export default line