module.exports = {
 name: "ban",
 description: "Ban a Person",
 usage: "<prefix> ban <@user/id> <grund> (Alternative: <prefix>banid <@user/id> <grund>)",
 code: 
 `
Ban Report executed! Awaiting Verification!
 $setServerVar[member;$findUser[$message[1];no]]
 $setServerVar[issuer;$authorID]
 $setServerVar[reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Reason hasn't been provided];false;$messageSlice[1]]]
$onlyIf[$isBanned[$findUser[$message[1];no]]==false;{author:$userTag:$authorAvatar}{title:Ban Logded}{description:$userTag[$findUser[$message[1];no]] is already banned}{footer:Coded by Ohnezahn#8135 with dbd.js:$authorAvatar}{color:ff2200}{timestamp}]
$onlyPerms[ban;{title:Missing Permission!}{description:Your Missing the following Permission: **BAN_MEMBERS**}{timestamp:ms}{color:ff2200}{footer:Coded by Ohnezahn#8135 with dbd.js}]
$onlyBotPerms[ban;{title:Missing Permission!}{description:I'm missing the following Permission: **BAN_MEMBERS**}{timestamp:ms}{color:ff2200}{footer:Coded by Ohnezahn#8135 with dbd.js}]
$onlyIf[$mentioned[1]!=$clientid;{author:$userTag:$authorAvatar}{title:Ban Logded}{description:How should I ban myself? :thinking:}{footer:Coded by Ohnezahn#8135 with dbd.js}{color:ff2200}{timestamp}]
`
}