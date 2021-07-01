module.exports = {
name: "warn",
code: `$color[#1BE109]
$onlyPerms[manageroles;You cannot use this command]
$argsCheck[>1;Calm down, Who are you going to warn]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$title[You Have Been Warned!]
$description[<@$mentioned[1]>, You Have Been Warned by $username
Reason: $messageSlice[1]]
$channelSendMessage[859691184913514496;{title:$username[$mentioned[1]]'ve Been Warned By $username}{description:Reason: $messageSlice[1]}{color:RED}]`
};