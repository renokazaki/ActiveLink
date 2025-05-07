import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";
// Prismaから返されるUser型を定義
type PrismaUser = {
  id: number;
  clerk_id: string;
  display_name: string;
  profile_image: string;
  target: string;
  is_active: boolean;
  created_at: Date; // Dateオブジェクト
  updated_at: Date; // Dateオブジェクト
  // 他のフィールド
};
const friendRequest = new Hono()

//友達検索用API
.get("/search", async (c) => {
  const myClerkId = c.req.query("my_clerk_id");
  const friendClerkId = c.req.query("clerk_id");
  
  // 検索対象のユーザーを取得
  const users = await prisma.user.findMany({
    where: {
      clerk_id: friendClerkId,
    },
  });
  
  // ユーザーが見つからない場合は空の配列を返す
  if (!users || users.length === 0) {
    return c.json([]);
  }
  
  // 友達関係の情報を付加したユーザー情報を作成
  const usersWithFriendship = await Promise.all(
    users.map(async (user:PrismaUser) => {
      // 友達関係の検索
      const friendship = await prisma.friendship.findFirst({
        where: {
          OR: [
            {
              sender_clerk_id: myClerkId,
              receiver_clerk_id: user.clerk_id,
            },
            {
              sender_clerk_id: user.clerk_id,
              receiver_clerk_id: myClerkId,
            },
          ],
        },
      });
      
      // 友達関係情報をユーザー情報に追加
      return {
        ...user,
        friendship: friendship ? {
          id: friendship.id,
          status: friendship.status,
          // 自分が送信者かどうかのフラグを追加
          is_sender: friendship.sender_clerk_id === myClerkId,
        } : null
      };
    })
  );
  
  return c.json(usersWithFriendship);
})


//申請状況の取得用API
.get("/pendingRequests", async (c) => {
  const clerkId = c.req.query("clerk_id");
  
  if (!clerkId) {
    return c.json({ error: "clerk_idが必要です" }, 400);
  }
  
  // 自分が関わるすべての保留中の友達申請を取得
  const pendingRequests = await prisma.friendship.findMany({
    where: {
      OR: [
        { sender_clerk_id: clerkId, status: "pending" },
        { receiver_clerk_id: clerkId, status: "pending" }
      ]
    },
    include: {
      sender: true,
      receiver: true
    }
  });
  
  return c.json(pendingRequests);
})

//友達申請用API
  .post("/sendRequest", async (c) => {
    const body = await c.req.json();
    const {myClerkId, friendsClerkId } = body;
    const friendRequest = await prisma.friendship.create({
      data: {
        sender_clerk_id: myClerkId,
        receiver_clerk_id: friendsClerkId,
        status: "pending",
      },
    });
    return c.json(friendRequest);
  })

// friendRequest/index.ts に追加
.put("/respondRequest", async (c) => {
  const body = await c.req.json();
  const { requestId, action } = body; // actionは "accept" または "reject"
  
  try {
    // friendshipテーブルの更新
    const status = action === "accept" ? "accepted" : "rejected";
    
    const updatedFriendship = await prisma.friendship.update({
      where: { id: parseInt(requestId) },
      data: { status }
    });
    
    return c.json(updatedFriendship);
  } catch (error) {
    console.error("友達申請応答エラー:", error);
    return c.json({ error: "友達申請の応答に失敗しました" }, 500);
  }
})

//友達申請の削除用API
.delete("/deleteRequest", async (c) => {
  const body = await c.req.json();
  const { requestId } = body;
  
  try {
    const deletedFriendship = await prisma.friendship.delete({
      where: { id: parseInt(requestId) }
    });
    
    return c.json(deletedFriendship);
  } catch (error) {
    console.error("友達申請削除エラー:", error);
    return c.json({ error: "友達申請の削除に失敗しました" }, 500);
  }
})
  export default friendRequest;
