#1 Copiar los archivos
FROM node:18 as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

#Exponer el frontend
FROM nginx:1.23.4-alpine

#ADD ./config/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=node /app/dist /var/www/app/

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]