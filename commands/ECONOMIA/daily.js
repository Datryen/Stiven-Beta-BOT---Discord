module.exports = {
  name: "coleta",
  code:`
$globalCooldown[1m;Espere 1 minuto para trabalhar novamente!]
$setGlobalUserVar[dinheiro;$sum[$getGlobalUserVar[dinheiro;$authorID];$random[1000;3000]];$authorID]
<:emoji_23:846063341695926344> **|** <@$authorID>, hoje você ganhou $random[1000;3000] **MineCoins**! continue coletando o daily diariamente! `
}