module.exports = {
  name: "mute",
description: "Mutes a user for a period of time",
category: "Moderation",
usage: "!mute <time>",
code: `
$sendDM[$mentioned[1];{description:Your mute time has finished in $serverName[$guildID]}{color:BLUE}]
$takeRoles[$mentioned[1];$getServerVar[mutedrole]]
$wait[$message[2]]
$channelSendMessage[$channelID;{title:Muted}{description:Muted <@$mentioned[1]> for $message[2]}{color:GREEN}]
$giveRoles[$mentioned[1];$getServerVar[mutedrole]]
$argsCheck[>2;> :x: **Please enter a valid time**]
$argsCheck[>1;Please mention a user]
$onlyPerms[manageserver;> :x: **You need manage roles permission**]
$channelSendMessage[859691184913514496;{title:$username[$mentioned[1]]'ve Been Muted By $username}{description:Reason: $messageSlice[2]}{color:RED}]
`
}