const { NitroClient, MessageHandler } = require("../../Nitro.js");
const bot = new NitroClient("filter");
bot.useTable("Filter");
module.exports = bot

const Message = new MessageHandler(bot);

Message.on("create", message => {
    if (message.channel.type !== "text") return;
    //Handle Filtering.
    const filters = message.guild.get("Filter", "filters");
    const fp = message.guild.get("Filter", "filterpacks");
    const ex = message.guild.get("Filter", "exc");
    const channel = message.guild.get("Filter", "channel")
    const content = message.content.toLowerCase();

    if (ex[message.channel.id]) return;
    if (ex[message.author.id]) return;
    for (let id of Object.keys(ex)) {
        if (message.member && message.member.roles.has(ex)) return;
    }

    let failed = false;
    for (let word of Object.keys(filters)) 0;

    
})

/*    if (keys.some(word => ~low.indexOf(word.toLowerCase()))) {
        message.delete()
        let w
        keys.forEach(k => low.includes(k.toLowerCase()) ? w = k : 0)
        strike(message.guild.id, message.author.id)
        message.author.send(filters.msg ? filters.msg : "**Your message was deleted because it contained a restricted keyword: **"+w)
    }*/