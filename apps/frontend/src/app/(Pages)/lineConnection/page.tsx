"use client";
import { UserProfile, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { client } from "@/utils/client"; // APIクライアント

// 型定義
interface LineAccount {
  id: string;
  firstName: string;
  imageUrl: string;
}

export default function LineConnectionPage() {
  const { user } = useUser();
  const [lineAccount, setLineAccount] = useState<LineAccount | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (user) {
      const account = user.externalAccounts?.find(
        (acc) => acc.provider === "line"
      );

      if (account) {
        setLineAccount({
          id: account.providerUserId,
          firstName: account.firstName,
          imageUrl: account.imageUrl,
        });

        console.log("✅ LINE連携済み");
        console.log("アカウント情報:", account);
        console.log("LINE User ID:", account.id);
        console.log("表示名:", account.firstName);
        console.log("写真:", account.imageUrl);
        console.log("LineAccount中身確認:", lineAccount);
      } else {
        setLineAccount(null);
        console.log("❌ LINE未連携");
      }
    }
  }, [user]);

  // 自分のLINEにメッセージ送信
  const sendToMyLine = async () => {
    if (!message.trim() || !lineAccount || !user) return;

    setLoading(true);
    try {
      const response = await client.api.line["send-to-user"].$post({
        json: {
          lineUserId: lineAccount.id,
          message: message.trim(),
          senderName: lineAccount.firstName,
        },
      });

      const data = await response.json();
      setResult(data);

      if (data.success) {
        setMessage(""); // 成功時はメッセージをクリア
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResult({ success: false, message: "メッセージ送信に失敗しました" });
    } finally {
      setLoading(false);
    }
  };

  // よく使うメッセージのクイック送信
  const sendQuickMessage = async (quickMessage: string) => {
    setMessage(quickMessage);
    setTimeout(() => {
      sendToMyLine();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">アカウント設定</h1>

        {lineAccount ? (
          <div className="space-y-6">
            {/* LINE連携済み表示 */}
            <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
              <h2 className="text-lg font-medium text-green-800 mb-2">
                ✅ LINE連携済み
              </h2>
              <div className="space-y-1">
                <p className="text-green-700">
                  <strong>LINE User ID:</strong> {lineAccount.id}
                </p>
                <div className="flex items-center gap-2">
                  {lineAccount.imageUrl && (
                    <img
                      src={lineAccount.imageUrl}
                      alt="LINE User Image"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  {lineAccount.firstName && (
                    <p className="text-green-700">
                      <strong>表示名:</strong> {lineAccount.firstName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* メッセージ送信機能 */}
            <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-4">
                📱 LINEメッセージ送信テスト
              </h3>

              {/* クイックメッセージボタン */}
              <div className="mb-4">
                <p className="text-sm text-blue-700 mb-2">クイック送信:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => sendQuickMessage("テストメッセージです 📱")}
                    disabled={loading}
                    className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:bg-gray-400"
                  >
                    テストメッセージ
                  </button>
                </div>
              </div>

              {/* カスタムメッセージ */}
              <div className="space-y-3">
            

                <button
                  onClick={sendToMyLine}
                  disabled={loading || !message.trim()}
                  className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "送信中..." : "自分のLINEに送信 📤"}
                </button>
              </div>

              {/* 結果表示 */}
              {result && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    result.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {result.message}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <h2 className="text-lg font-medium text-yellow-800 mb-2">
              ⚠️ LINE未連携
            </h2>
            <p className="text-yellow-700">
              Lineで友達の活動の通知を受け取りたい場合は下の設定画面からLINEアカウントを連携してください。
            </p>
          </div>
        )}

        {/* ClerkのUserProfileコンポーネント */}
        <div className="bg-white rounded-lg shadow">
          <UserProfile
            routing="hash"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border-0",
              },
            }}
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">📱 LINE連携手順</h3>
          <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
            <li>
              上の設定画面で <strong>「Connected accounts」</strong>
              タブをクリック
            </li>
            <li>
              <strong>「Connect LINE」</strong> ボタンをクリック
            </li>
            <li>
              LINEの認証画面で <strong>「許可」</strong> をクリック
            </li>
            <li>連携完了後、このページが更新されてLINE情報が表示されます</li>
            <li>ブラウザのコンソールにLINE User IDが出力されます</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
