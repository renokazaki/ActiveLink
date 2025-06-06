import { Hono } from 'hono';
import { prisma } from '../../../prisma/prisma';

//👷開発用
// import { config } from 'dotenv';
// // // .envファイルを読み込む
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

  // 登録時にテストメッセージをLINEに送信
  .post('/send-to-user', async c => {
    try {
      const { lineUserId, message, senderName } = await c.req.json();

      if (!lineUserId || !message) {
        return c.json(
          {
            success: false,
            message: 'lineUserId and message are required',
          },
          400
        );
      }

      // 送信者名がある場合は署名を追加
      const formattedMessage = senderName ? `${message}\n\n- ${senderName}さん` : message;

      await sendLineMessageToUser(lineUserId, formattedMessage);

      return c.json({
        success: true,
        message: '✅ メッセージを送信しました！',
      });
    } catch (error) {
      console.error('❌ Error in send-to-user:', error);
      return c.json(
        {
          success: false,
          message: 'メッセージ送信に失敗しました',
          error: error instanceof Error ? error.message : '不明なエラー',
        },
        500
      );
    }
  })

  // LINEのIDを設定
  .put('/update_line_id', async c => {
    try {
      const { clerk_id, line_id } = await c.req.json();

      const updatedUser = await prisma.user.update({
        where: { clerk_id },
        data: { line_id },
      });

      return c.json(updatedUser);
    } catch (error) {
      console.error("Error updating user's LINE ID:", error);
      return c.json({ error: "Failed to update user's LINE ID" }, 500);
    }
  })

  // 活動ボタン押下時に、友達且つLine連携を行っているユーザにLINEに通知を送る
  .post('/send_to_friends', async c => {
    try {
      const { clerk_id } = await c.req.json();

      if (!clerk_id) {
        return c.json({ success: false, error: 'clerk_id is required' }, 400);
      }

      // 活動ユーザー情報取得
      const user = await prisma.user.findUnique({
        where: { clerk_id },
        select: { display_name: true },
      });

      if (!user) {
        return c.json({ success: false, error: 'User not found' }, 404);
      }

      // LINE連携済みの友達を取得
      const friends = await prisma.user.findMany({
        where: {
          AND: [
            { line_id: { not: null } },
            {
              OR: [
                {
                  received_friendships: {
                    some: { sender_clerk_id: clerk_id, status: 'accepted' },
                  },
                },
                {
                  sent_friendships: {
                    some: { receiver_clerk_id: clerk_id, status: 'accepted' },
                  },
                },
              ],
            },
          ],
        },
        select: { line_id: true, display_name: true },
      });

      // 各友達にLINE送信
      let successful = 0;
      for (const friend of friends) {
        try {
          const message = `🏃‍♂️ 友達の活動通知\n\n${user.display_name} さんが活動を開始しました！\n\n一緒に頑張りましょう！💪\n\nhttps://active-link-frontend.vercel.app/`;

          await sendLineMessageToUser(friend.line_id!, message);
          successful++;
        } catch (error) {
          console.error(`Failed to send to ${friend.display_name}:`, error);
        }
      }

      return c.json({
        success: true,
        message: `${successful}人の友達に通知を送信しました`,
        total: friends.length,
        successful,
      });
    } catch (error) {
      console.error('Error sending to friends:', error);
      return c.json({ success: false, error: 'Failed to send to friends' }, 500);
    }
  });

export default line;
