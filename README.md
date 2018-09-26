# 開発環境
- Ruby 2.3.1
- Rails 5.0.7

# DB設計
## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer| |
|body|text| |
|image|string| |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|timestanmp|datetime| |

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|index: true|
|name|string|null: false|
|email|string|unique: true|
|password|string| |
|encrypted_password|string| |

### Association
- has_many :groups_users
- has_many :groups, through: groups_users
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|index: true|
|group_name|string|null: false|

### Association
- has_many :groups_users
- has_many :users, through: groups_users
- has_many :messages


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer| |
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
