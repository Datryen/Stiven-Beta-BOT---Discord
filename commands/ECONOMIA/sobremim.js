module.exports = {
  name: "sobremim",
  code: `
$argsCheck[>1;Você precisa escrever um descrição]
$setGlobalUserVar[meutexto;$message]
Sua descrição foi alterada para: 
$message
  `
}