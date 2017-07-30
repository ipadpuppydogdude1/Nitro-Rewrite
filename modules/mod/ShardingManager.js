const Discord = require("discord.js")
const {TOKEN, SHARDS} = require("../../config.js")

const ShardingManager = new Discord.ShardingManager("./modules/mod/bot.js", {
  totalShards: SHARDS,
  token: TOKEN
})
ShardingManager.spawn().catch(console.log)