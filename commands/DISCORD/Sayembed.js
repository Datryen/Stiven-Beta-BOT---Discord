module.exports= {
  name:"embedSay",
  aliases: ['sayEmbed', 'embedsay', 'SayComEmbed'],
  code:`
$description[$message]
$color[RANDOM]
$deletecommand
$addtimestamp
$footer[$usertag;$authoravatar]
$onlyIf[$message[1]!=;{title:<:emoji_30:839588463002386433> | Stiven - embedSay Comando }{description:<:emoji_8:843678279238942752> \`$getServerVar[prefixo]embedSay\`
  **Envie uma mensagem com Embed bem legal!**
  
<:emoji_3:843677246337712129> **| Como usar?  \`$getServerVar[prefixo]embedSay <texto>\`** 

 Ao usar o  \`$getServerVar[prefixo]embedSay\`  o Stiven irá enviar uma mensagem no canal do qual o comando foi ultilizado com um Embed, mas com cor aleatória. Ele irá repetir exatamente o seu texto após o comando.
Copie o seu texto e deixe-o copiado no teclado, a cor do embed é aleatória, então vá usando o comando até que venha sua cor preferida.

📚 **| Aliasses**

Aliasses são sinônimos de determinado comando, você pode usa-los no lugar do comando tradicional!

 \`$getServerVar[prefixo]sayEmbed\`, \`$getServerVar[prefixo]embedsay\`, \`$getServerVar[prefixo]SayComEmbed\`

}{color:ORANGE}]
`

}