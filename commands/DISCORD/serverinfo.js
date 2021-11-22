module.exports = {
 name: "serverinfo",
 aliases: ['guildinfo'],
 code: `
 $thumbnail[$serverIcon[$guildID;2048]]
 $color[ORANGE]
 $addTimestamp
 $footer[Code made by clou⨾#2599!]
 $title[$serverName]
 $description[

<:emoji_7:843680234590175283> **Informações do servidor**
> **ID do servidor:** \`$guildID\`
> **Owner:** \`$userTag[$ownerID]\` (\`$ownerID\`)
> **Região:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Brazil];europe;Europa];hong kong;Hong Kong];eua;EUA];india;India];japan;Japão]

> $addfield[📆 Data de Criação;$guild[$guildID;created] ( \`$guild[$guildID;timestamp]\` )]

<:emoji_21:845340435923599390> **| Boost Info**
> Boost Level: $serverBoostLevel
> Boost Count: $serverBoostCount

**Brut Info**

Vanity URL: $vanityURL
Ban Count: $banCount
Members Count: $membersCount
Bot Count: $botCount
Channel Count: $channelCount
Role Count: $roleCount
Emoji Count: $emojiCount
Online Member:
$membersCount[$guildID;online]
Idle Members: $membersCount[$guildID;Idle]
Do Not Disturb Members: $membersCount[$guildID;dnd]
Offline/Invisible Members: $membersCount[$guildID;offline]

Invite Link: $getServerInvite]
 `
}

