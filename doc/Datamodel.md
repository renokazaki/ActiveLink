```mermaid
erDiagram
    users ||--o{ activities : "記録する"
    users ||--o{ weekly_targets : "設定する"
    users ||--o{ friendships : "申請する"
    activities ||--o{ activity_details : "詳細"
    
    users {
        int id PK "ユーザーID"
        string display_name "ユーザー名"
        string profile_image "プロフィール画像のパス"
        string target "実現したい目標"
        boolean is_active "現在アクティブかどうかの判別"
        timestamp created_at "作成日時"
        timestamp updated_at "最終更新日時"
    }
    
    activities {
        int id PK "活動ID"
        int user_id FK "ユーザーID"
        date activity_date "活動日"
        timestamp created_at "作成日時"
        timestamp updated_at "最終更新日時"
    }
    
    activity_details {
        int id PK "詳細ID"
        int activity_id FK "活動ID"
        text description "活動内容の説明"
        int duration_minutes "活動時間(分)"
        string category "活動カテゴリ"
        timestamp created_at "作成日時"
        timestamp updated_at "最終更新日時"
    }
    
    weekly_targets {
        int id PK "週目標ID"
        int user_id FK "ユーザーID"
        string title "週目標タイトル"
        text description "週目標の詳細説明"
        date target_start_date "目標開始日"
        date target_end_date "目標終了日"
        date actual_start_date "実際の開始日"
        date actual_end_date "実際の終了日"
        enum status "状態(pending/started/completed)"
        timestamp created_at "作成日時"
        timestamp updated_at "最終更新日時"
    }
    
    friendships {
        int id PK "友達関係ID"
        int sender_id FK "リクエスト送信者ID"
        int receiver_id FK "リクエスト受信者ID"
        enum status "状態(pending/accepted/rejected)"
        timestamp created_at "作成日時"
        timestamp updated_at "最終更新日時"
    }