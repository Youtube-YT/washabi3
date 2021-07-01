module.exports = {
  name: "setmute",
description: "Set the mute role of your server",
category: "Moderation",
usage: "<prefix>setmute @role",
code:`$setServerVar[mutedrole;$mentionedRoles[1]]
Successfully set muted role to <@&$mentionedRoles[1]>
$onlyPerms[manageroles;You need manage roles to do that.]`
}