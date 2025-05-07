"use client";

import { Button } from "@/_components/shadcn_ui/button";
import { client } from "@/utils/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({friendClerkId, myClerkId}: {friendClerkId: string, myClerkId: string}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      
      // 直接APIを呼び出す
      const response = await client.api.friendRequest.deleteFriend.$delete({
        json: { myClerkId, friendClerkId }
      });

      if (!response.ok) {
        throw new Error("友達の削除に失敗しました");
      }

      // ページを更新する
      router.refresh();
    } catch (error) {
      console.error("削除エラー:", error);
      alert("削除に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ml-2">
      <Button 
        onClick={handleDelete}
        type="button" 
        variant="destructive" 
        size="sm"
        disabled={isLoading}
      >
        {isLoading ? "..." : "削除"}
      </Button>
    </div>
  );
};

export default DeleteButton;