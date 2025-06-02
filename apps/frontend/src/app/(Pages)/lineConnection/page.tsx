"use client";
import { useUser } from "@clerk/nextjs";
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
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (user) {
      checkLineConnection();
    }
  }, [user]);

  const checkLineConnection = async () => {
    const account = user?.externalAccounts?.find(
      (acc) => acc.provider === "line"
    );

    if (account) {
      setLineAccount({
        id: account.providerUserId,
        firstName: account.firstName,
        imageUrl: account.imageUrl,
      });

      console.log("✅ LINE連携済み");
      console.log("LINE User ID:", account.providerUserId);
    } else {
      setLineAccount(null);
      console.log("❌ LINE未連携");
    }
  };

  // テストメッセージ送信 + DB登録
  const sendTestMessage = async () => {
    if (!lineAccount || !user) return;

    setLoading(true);
    try {
      // 1. データベースに登録
      await client.api.line.update_line_id.$put({
        json: {
          clerk_id: user.id,
          line_id: lineAccount.id,
        },
      });

      // 2. テストメッセージ送信
      const response = await client.api.line["send-to-user"].$post({
        json: {
          lineUserId: lineAccount.id,
          message:
            "🎉 LINE連携設定完了！\n\n友達の活動通知を受け取ることができます。",
          senderName: lineAccount.firstName,
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult({ success: true, message: "✅ LINE連携が完了しました！" });
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult({ success: false, message: "設定に失敗しました" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">アカウント設定</h1>

        {!lineAccount ? (
          // 未連携
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <h2 className="text-lg font-medium text-yellow-800 mb-2">
              ⚠️ LINE未連携
            </h2>
            <p className="text-yellow-700">
              Lineで友達の活動の通知を受け取りたい場合は下の設定画面からLINEアカウントを連携してください。
            </p>
          </div>
        ) : (
          // 連携済み
          <div className="space-y-6">
            <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
              <h2 className="text-lg font-medium text-green-800 mb-2">
                ✅ LINE連携済み
              </h2>
              <div className="space-y-2">
             
                <div className="flex items-center gap-2">
                  {lineAccount.imageUrl && (
                    <img
                      src={lineAccount.imageUrl}
                      alt="LINE User Image"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <p className="text-green-700">
                    <strong>表示名:</strong> {lineAccount.firstName}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-4">
                📱 ステップ4: 公式アカウント登録
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                メッセージを受け取るために、まず公式アカウントを友だち追加してください。
              </p>

              {/* PC用: QRコード */}
              <div className="text-center mb-4">
                <div className="inline-block p-4 bg-white rounded-lg border">
                  <img src="/LineAccount.PNG" alt="QR code" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-4">
                📱 ステップ5: 登録を完了する
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                メッセージを送信してLINEアカウントとの紐づけの設定を完了してください。
              </p>
              <button
                onClick={sendTestMessage}
                disabled={loading}
                className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "送信中..." : "🚀 テストメッセージ送信"}
              </button>
            </div>
          </div>
        )}

        {/* 結果表示 */}
        {result && (
          <div
            className={`mt-6 p-3 rounded-md ${
              result.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {result.message}
          </div>
        )}

   

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">📱 LINE連携手順</h3>
          <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
            <li>
              右上のユーザーアイコンをクリックし、 <strong>「Manage account」</strong>
              を選択
            </li>
            <li>
              <strong>「Profile」</strong>ページの<strong>「Connected accounts」</strong> でLINEを選択
            </li>
            <li>
              LINEの認証画面で <strong>「許可」</strong> をクリック
            </li>
            <li>
            表示されるQRコードを読み取り、<strong>公式アカウントを友達追加</strong> する
            </li>
            <li>
              <strong>「テストメッセージ送信」</strong> ボタンを押す
            </li>
            <li>🎉 設定完了！<strong>友達が活動ボタンを押下したらリアルタイムで</strong>公式アカウントから通知を受け取れます🎊</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
