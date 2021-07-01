module.exports = {
  name: "ban",
  code: `$author[$username[$clientID] Moderation;$userAvatar[$clientID]]
$title[Banned]
$description[$username[$mentioned[1]] Has been banned from the guild
Reason: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No reason has been given;-1];false;$noMentionMessage;-1]]
$color[$getRoleColor[$highestRole[$clientID]]]
$footer[Banned by the user $userTag;$authorAvatar]
$ban[$mentioned[1;yes]]
$onlyPerms[ban;Im sorry you do not have permissin to do that]
$argsCheck[>1;Please mention a user to ban!]
$channelSendMessage[859691184913514496;{title:$username[$mentioned[1]]'ve Been Banned By $username}{description:Reason: $messageSlice[1]}{color:RED}]
   
  `
} 