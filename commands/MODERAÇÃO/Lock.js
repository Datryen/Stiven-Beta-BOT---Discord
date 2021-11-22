module.exports = {
 name: "lock",
 code:`
  $nomention
$color[FF8725]
$addTimestamp
$footer[]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$title[Canal Bloqueado!]
$description[ 

🔒 **Aplicador:** <@$authorID>

use  \`D!unlock\`  para destrancar.
]
$onlyAdmin[❌ | Apenas para administradores!]
$suppressErrors[]
$reply`

  
}