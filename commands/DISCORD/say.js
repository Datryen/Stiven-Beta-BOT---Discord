module.exports= {
  name:"say",
  aliases: ['falar','dizer','diga','fale'],
code: `
$deletecommand
$message



<:emoji_4:843677282690531380>  **❘** *Mensagem enviada por <@$authorID>!*
$onlyIf[$message[1]!=;<@$authorID> {title:<:emoji_30:839588463002386433> | Stiven - say comando }{description:<:emoji_8:843678279238942752> \`$getServerVar[prefixo]say\`
  **Digite algo para que eu diga por você!**
  
<:emoji_3:843677246337712129> **| Como usar?  \`$getServerVar[prefixo]say <texto>\`** 

 Ao usar o  \`$getServerVar[prefixo]say\`  o Stiven irá enviar uma mensagem no canal do qual o comando foi ultilizado. Ele irá repetir exatamente o seu texto após o comando.  

📚 **| Aliasses**

Aliasses são sinônimos de determinado comando, você pode usa-los no lugar do comando tradicional!

\`$getServerVar[prefixo]falar\`, \`$getServerVar[prefixo]dizer\`, \`$getServerVar[prefixo]diga\`, \`$getServerVar[prefixo]fale\` 

}{color:ORANGE}]
`
}