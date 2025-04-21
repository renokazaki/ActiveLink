import { client } from "@/utils/client";

export default async function FriendsInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // idを数値に変換するのではなく、文字列のまま渡す
  const res = await client.api.user.friends[":id"].$get({
    param: { id: id },
  });

  const friendsData = await res.json();

  return (
    <div>
      {friendsData && (
        <>
          <div>友達情報 ID: {friendsData.id}</div>
          {/* オブジェクトを文字列に変換して表示 */}
          <pre>{JSON.stringify(friendsData, null, 2)}</pre>

          {/* 特定のプロパティにアクセスして表示 */}
          <div>
            <h2>{friendsData.display_name}</h2>
            <p>目標: {friendsData.target}</p>
            <p>アクティブ: {friendsData.is_active ? "はい" : "いいえ"}</p>
          </div>
        </>
      )}
    </div>
  );
}
