const discord = require('discord.js');
const bot = new discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const ytdl = require('ytdl-core');
const { TOKEN, CHANNEL, SERVER, LIVE } = require("./config.json");

bot.on('ready', async () => {
 console.log("started stream music")
 let channel = bot.channels.cache.get(CHANNEL) || await bot.channels.fetch(CHANNEL)
 
 if(!channel) return;
 const connection = await channel.join();
 connection.play(ytdl(LIVE))
})

setInterval(async function() {
 if(!bot.voice.connections.get(SERVER)) {
   let channel = bot.channels.cache.get(CHANNEL) || await bot.channels.fetch(CHANNEL)
   if(!channel) return;
   
   const connection = await channel.join()
   connection.play(ytdl(LIVE))
 }
}, 20000)

bot.login(TOKEN)
