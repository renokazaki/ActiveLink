import { client } from "@/utils/client";

export default async function Home() {
  const res = await client.api.user.$get();
  const userData = await res.json();

  return (
    <div className="text-white mt-12">
      {userData ? (
        <>hello {userData.display_name}</>
      ) : (
        <>ユーザーデータが見つかりませんでした</>
      )}
    </div>
  );
}
