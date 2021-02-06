const discord = require('discord.js');
const bot = new discord.Client();
const ytdl = require('ytdl-core');
const { TOKEN, CHANNEL, SERVER, LIVE } = require("./config.js");

bot.on('ready', async () => {
 console.log("started stream music")
 let channel = bot.channels.cache.get(CHANNEL) || await bot.channels.fetch(CHANNEL)
 
 if(!channel) return;
 const connection = await channel.join();
 connection.play(ytdl(LIVE))
})

setInterval(async function() {
 if(!client.voice.connections.get(SERVER)) {
   let channel = bot.channels.cache.get(CHANNEL) || await bot.channels.fetch(CHANNEL)
   if(!channel) return;
   
   const connection = await channel.join()
   connection.play(ytdl(LIVE))
 }
}, 20000)

bot.login(TOKEN)
