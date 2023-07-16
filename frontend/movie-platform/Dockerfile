# parte de una imagen ligera de Node.js
FROM node:16-alpine

#establece el directorio de trabajo
WORKDIR /app

#copia el archivo package.json en el directorio de trabajo
COPY ./package.json /app/package.json

#ejecuta npm install para instalar las dependencias del proyecto
RUN npm install

#copia el resto del proyecto en el directorio de trabajo
COPY . /app

#npm run build para construir el proyecto
RUN npm run build

#expone el puerto 3000 para que se pueda acceder a la aplicación
EXPOSE 3000

#ejecuta el comando npm start para iniciar el servidor
CMD ["npm", "run", "start"]