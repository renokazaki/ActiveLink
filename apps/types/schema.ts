// types/schema.ts
import { z } from "zod";

// ActivityDetail投稿時のスキーマを定義
export const postActivityDetailSchema = z.object({
  activity_id: z.number(),
  description: z.string().min(1, "活動内容は必須です"),
  duration_minutes: z.coerce
    .number()
    .int("活動時間は整数である必要があります")
    .min(1, "活動時間は1分以上である必要があります"),
  category: z.string().min(1, "カテゴリーは必須です"),
});

// ActivityDetail投稿時のスキーマからTypeScriptの型を生成
export type PostActivityDetailFormData = z.infer<typeof postActivityDetailSchema>;