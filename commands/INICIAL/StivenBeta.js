module.exports= {
nonPrefixed:true,
name:"$alwaysExecute",
code:`
$reply[$messageID;
<:emoji_30:839691602238767145> **|** <@$authorID> Você está usando a versão **experimental** do Stiven. Várias funcionalidades podem não funcionar, posso ficar offline a qualquer momento, erros e inesperados podem estar acontecendo! 
$onlyIf[$stringStartsWith[$message;$getServerVar[prefixo]]!=false;]]
  `
}
