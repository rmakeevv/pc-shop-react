FROM node:16-alpine as builder
COPY . .
RUN npm ci
RUN npm run build


FROM nginx as production
COPY --from=builder build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]