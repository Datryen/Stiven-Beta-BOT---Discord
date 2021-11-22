const aoijs = require('aoi.js');

require("dotenv").config()

const express = require('express');
const app = express();
app.get('/', (request, response) => {
	console.log('Todos os arquivos, recarregados!🔌');
	response.sendStatus(200);
});
app.listen(process.env.PORT);

const bot = new aoijs.Bot({
sharding: false,
shardAmount: 2,
token: process.env.TOKEN,
prefix: ['$getServerVar[prefixo]']
});

const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200);
 res.end('Hello world!');
});
server.listen(3000)

//BOT Comandos

bot.onMessage()
bot.loadCommands(`./commands/`);

//BOT variáveis

bot.variables({
prefixo: "D.",
})

bot.variables({
  dinheiro: "0",
})

bot.variables({
  meutexto: "digite ,sobremim <frase> para mudar sua frase."
})

bot.variables({
  addimage: "https://cdn.discordapp.com/attachments/711445383007567908/716685813261533234/thumb-1920-909912.png?size=2048"
})


//BOT status

bot.status({
  text: "não, trabalhando em novas funções",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.status({
 text: "Minecraft" ,
 type: "PLAYING",
  time: 12
})
