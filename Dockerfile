FROM node:18

WORKDIR /app/frontend
COPY package*.json ./
RUN npm install

COPY . .

# 添加構建步驟
RUN npm run build

EXPOSE 3000
# 開發模式使用 npm run dev
CMD ["npm", "run", "dev"]
