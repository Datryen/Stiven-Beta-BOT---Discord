module.exports = {
 name: "userinfo",
 code: `
 $thumbnail[$userAvatar[$findUser[$message]]]
 $title[User Info]
 $addField[**Permissions**;$userPerms[$findUser[$message]];yes]
 $addField[**Roles**;$userRoles[$findUser[$message];mentions];yes]
 $addField[**Highest Role**;<@&$highestRole[$findUser[$message]]>;yes]
 $addField[**Account Created**;$creationDate[$findUser[$message];date] ($creationDate[$findUser[$message];time]);yes]
 $addField[**Joined**;$memberJoinedDate[$findUser[$message];time] ago;yes]
 $addField[**Badges**;$getUserBadges[$findUser[$message]];yes]
 $addField[**Custom Status**;$getCustomStatus[$findUser[$message]];yes]
 $status[$mentioned[1;yes]];yes]
 $platform[$mentioned[1;yes]];yes]
 $addField[**Avatar**;[User Avatar\\]($userAvatar[$findUser[$message];2048;yes]);yes]
 $addField[**ID**;$mentioned[1;yes];yes]
 $addField[**Name**;$username[$findUser[$message]]#$discriminator[$findUser[$message]];yes]
 `
}