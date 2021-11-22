module.exports = {
  name:"unlock",
  code:`
  $nomention
$color[FF8725]
$addTimestamp
$footer[]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$title[Canal Desbloqueado!]
$description[ 

🔓 **Aplicador:** <@$authorID>

use  \`D!lock\`  para trancar.
]
$nomention
$color[FF8725]
$addTimestamp
$footer[]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$title[Canal Desbloqueado!]
$description[ 

🔓 **Aplicador:** <@$authorID>

use  \`D!lock\`  para trancar.
]
$onlyAdmin[❌ | Apenas para administradores!]
$reply
$onlyAdmin[❌ | Apenas para administradores!]$reply
  `
}