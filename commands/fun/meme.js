module.exports = {
  name: "meme",
  code: `$title[New Memes]
  $cooldown[5s;{title:Take A Chill Pill Man}{description:You can't spam like that! Wait %time% before use this command again!}{color:BLUE}]
  $image[https://ctk-api.herokuapp.com/meme/$random[1;500]]$color[RANDOM]`
}