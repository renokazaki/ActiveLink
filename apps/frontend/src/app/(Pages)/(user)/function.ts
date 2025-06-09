import { client } from "@/utils/client";
import { User } from "types/type";

export const getUserData = async (userId: string) => {
 try {
    const res = await client.api.user.$get({
      query: { clerk_id: userId },
    });

    if (!res.ok) {
      throw new Error(`APIエラー: ${res.status}`);
    }

    const userData = (await res.json()) as User;
    return userData;
  } catch (error) {
    console.error('ユーザーデータ取得エラー:', error);
    return null;
  }
};