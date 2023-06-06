FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "index.ts"]
EXPOSE 5000