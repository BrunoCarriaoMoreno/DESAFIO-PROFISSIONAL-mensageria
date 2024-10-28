# imagem oficial do Node.js
FROM node:18
# diretório de trabalho dentro do container
WORKDIR /usr/src/app
# copiando os arquivos package.json e package-lock.json
COPY package*.json ./
# instalação das dependências do projeto
RUN npm install
# copiando o código do projeto 
COPY . .
# compilando o código TS
RUN npm run build
# expondo a porta que o servidor vai escutar
EXPOSE 3000
# comando para rodar a aplicação
CMD [ "npm", "start" ]

