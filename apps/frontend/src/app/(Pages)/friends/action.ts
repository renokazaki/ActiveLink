// actions.ts
"use server";

import { prisma } from "backend/prisma/prisma";
import { revalidatePath } from "next/cache";

export async function deleteFriend(formData: FormData) {
  const friendClerkId = formData.get("friendshipId") as string;
  const myClerkId = formData.get("myClerkId") as string;
  

  
  if (!friendClerkId || !myClerkId) {
    console.error("必要なIDが不足しています");
    return;
  }
  
  try {
    // 友達関係を検索して削除
    const deletedFriendship = await prisma.friendship.deleteMany({
      where: {
        OR: [
          // 自分が送信者で相手が受信者のケース
          {
            sender_clerk_id: myClerkId,
            receiver_clerk_id: friendClerkId,
            status: "accepted" // 承認済みのみ削除
          },
          // 自分が受信者で相手が送信者のケース
          {
            sender_clerk_id: friendClerkId,
            receiver_clerk_id: myClerkId,
            status: "accepted" // 承認済みのみ削除
          }
        ]
      }
    });
    
    
    
    if (deletedFriendship.count === 0) {
      console.log("削除対象のレコードが見つかりませんでした");
    }
    
    console.log("友達を削除しました");
    // 成功したらパスを再検証（キャッシュを更新）
    revalidatePath("/friends");
    
  } catch (error) {
    console.error("友達削除エラー:", error);
  }
}