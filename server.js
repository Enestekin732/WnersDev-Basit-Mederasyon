const { Client, Intents } = require('discord.js');
const { AoiClient } = require('aoi.js');

const bot = new AoiClient({
    token:"", // botunun tokeni
    prefix:[".", "!"], // botun prefixi
    fetchInvites: true
})

//callbacker
bot.onMessage()
bot.onJoined()
bot.onLeave()

// komut yükleme

bot.loadCommands(`komutlar`) //komutlar klasor ismi bu

//variableler
bot.variables({
    afk: "", // bu kalsin afk için
})

bot.status({ 
    text: "WnersDev | mederaayon altyapısı", // buraya oyun oynuyor mesajı yaz.
    type: "Custom", // PLAYING'de yapabilirsin!
    time: 12 // eleme
})