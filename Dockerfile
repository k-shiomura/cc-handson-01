# ベースイメージ: Node.js 22 (Alpine)
FROM node:22-alpine

# 作業ディレクトリ
WORKDIR /app

# package.json と lock ファイルのみ先にコピーしてキャッシュを活用
COPY package.json package-lock.json* ./

# 依存関係インストール
RUN npm install

# ソースコードをコピー（開発時はボリュームマウントで上書きされる）
COPY . .

# Vite dev server のポート
EXPOSE 5173

# 開発サーバー起動
CMD ["npm", "run", "dev"]
