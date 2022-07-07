# Stage 1
FROM node:lts as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:latest
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80