const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('https://automatic-quilt-glazer.glitch.me').then(console.log('Pinged!'))
}, 4000) 

const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  sharding: false, 
  shardAmount: 2, 
  mobile: false, 
 
  token: process.env.TOKEN, 
  prefix: ["$getServerVar[prefix]"], 
  autoUpdate: true,
})
 
bot.status({
  text: "Eating sushi with washabi",
  type: "WATCHING",
  time: 12
})

bot.onMessage() 
bot.loadCommands(`./commands/`)

bot.command({
  name: "<@!859646919165214741>",
  code: `$title[DID YOU PING ME]

$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for commands AND STOP PINGING ME :<**]
$color[RANDOM]
`,
  nonPrefixed: true
});

bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})


bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})
 
bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})

bot.variables({
  prefix: "!",
  mutedrole: "",
  warn: "0",
  warnreason: "None",
   rch: "",
 rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0"
})