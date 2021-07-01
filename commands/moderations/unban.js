module.exports = {
  name: 'unban',
  code: `
  $title[$username[$findUser[$message[1]]] Has Been Unbanned!]
  $description[Action: **Unban**
  Unbanned By: **$username**]
  $unban[$findUser[$message[1]]]
  $color[GREEN]
  $onlyPerms[ban;YOU DONT HAVE PERMS AAAAAAAAAAAA]
    $argsCheck[>1;{description:Please Mention A User / ID.}{color:RED}]
    $channelSendMessage[859691184913514496;{title:$username[$findUser[$message[1]]]'ve Been Unban By $username}{description:Reason: $messageSlice[1]}{color:RED}]`
}