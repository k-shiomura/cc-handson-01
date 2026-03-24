# cc-handson-01 — 個人ポートフォリオサイト

React + Vite + TailwindCSS で構築した静的ポートフォリオサイトです。
GitHub Actions により `main` ブランチへの push で GitHub Pages へ自動デプロイされます。

**公開 URL**: https://k-shiomura.github.io/cc-handson-01/

---

## 技術スタック

| 分類 | 技術 | バージョン |
|------|------|-----------|
| フレームワーク | React | 18.x |
| ビルドツール | Vite | 5.x |
| CSS フレームワーク | TailwindCSS | 3.x |
| 言語 | TypeScript | 5.x |
| ホスティング | GitHub Pages | — |
| CI/CD | GitHub Actions | — |

---

## 機能

- **Hero** — 氏名・肩書き・CTA ボタン、フェードインアニメーション
- **About** — プロフィール画像・自己紹介文・SNS リンク
- **Skills** — カテゴリ別スキル一覧と習熟度インジケータ
- **Projects** — プロジェクトカード（サムネイル・技術タグ・GitHub/デモリンク）
- **Contact** — お問い合わせフォーム（クライアントサイドバリデーション）
- ダークモード（OS 設定連動 + トグルボタン、`localStorage` で状態保持）
- レスポンシブデザイン（モバイルファースト）
- セクション間スムーズスクロール

---

## ディレクトリ構成

```
cc-handson-01/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions デプロイワークフロー
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/               # 画像・フォントなど静的アセット
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   └── sections/         # Hero, About, Skills, Projects, Contact
│   ├── hooks/
│   │   └── useDarkMode.ts    # ダークモードカスタムフック
│   ├── App.tsx
│   └── main.tsx
├── Dockerfile
├── docker-compose.yml
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ローカル開発

### 前提条件

- Node.js 20 以上

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/k-shiomura/cc-handson-01.git
cd cc-handson-01

# 依存関係をインストール
npm install

# 開発サーバーを起動 (http://localhost:5173)
npm run dev
```

### その他のコマンド

```bash
npm run build    # プロダクションビルド (dist/ に出力)
npm run preview  # ビルド結果をローカルでプレビュー
npm run lint     # ESLint による静的解析
```

---

## Docker を使った開発

Docker / Docker Compose が使える環境では以下のコマンドで開発サーバーを起動できます。
WSL2 環境でのホットリロードにも対応しています。

```bash
# コンテナをビルドして起動
docker compose up --build

# バックグラウンドで起動する場合
docker compose up -d --build

# 停止
docker compose down
```

開発サーバーは http://localhost:5173 で確認できます。

---

## デプロイ

`main` ブランチへ push すると GitHub Actions が自動実行されます。

```
push to main
  └─ build job
      ├─ Node.js 20 セットアップ
      ├─ npm install
      ├─ npm run build  →  dist/
      └─ GitHub Pages へアップロード
```

手動でビルドして確認したい場合:

```bash
npm run build
npm run preview
```

---

## ライセンス

このリポジトリのコードは個人学習・ハンズオン用途で作成されています。
