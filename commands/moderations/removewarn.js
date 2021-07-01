module.exports = {
name: "removewarn",
code: `$color[#1BE109]
$onlyPerms[manageroles;You cannot use this command]
$argsCheck[>1;Calm down, Who are you removing the warn]
$setUserVar[warn;$sub[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$title[Your warning Has been removed]
$description[<@$mentioned[1]>, Your warning has been removed by $username]
$channelSendMessage[859691184913514496;{title:$username[$mentioned[1]]'ve Been Remove Warned By $username}{description:Reason: $messageSlice[1]}{color:RED}]`
};