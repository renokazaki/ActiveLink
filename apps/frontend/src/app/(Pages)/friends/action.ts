// actions.ts
"use server";
import { client } from "@/utils/client";
import { revalidatePath } from "next/cache";

export async function deleteFriend(formData: FormData) {
  const friendClerkId = formData.get("friendshipId") as string;
  const myClerkId = formData.get("myClerkId") as string;
  

  
  if (!friendClerkId || !myClerkId) {
    console.error("必要なIDが不足しています");
    return;
  }
  
  try {
   const deletedFriendship = await client.api.friendRequest.deleteFriend.$delete({
    body: {
      myClerkId,
      friendClerkId,
    },
   });
    
    
    if (!deletedFriendship.ok) {
      console.log("削除対象のレコードが見つかりませんでした");
    }
    
    console.log("友達を削除しました");
    // 成功したらパスを再検証（キャッシュを更新）
    revalidatePath("/friends");
    
  } catch (error) {
    console.error("友達削除エラー:", error);
  }
}