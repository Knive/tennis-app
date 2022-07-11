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

# docker build -t rg.fr-par.scw.cloud/tennis-app/tennis-app:latest .
# docker image ls
# docker run -p 127.0.0.1:80:80 --rm -it rg.fr-par.scw.cloud/tennis-app/tennis-app:latest
# docker login rg.fr-par.scw.cloud/tennis-app -u nologin -p {SECRETKEY}
# docker push rg.fr-par.scw.cloud/tennis-app/tennis-app:latest