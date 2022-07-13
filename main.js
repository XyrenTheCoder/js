const Discord = require("discord.js")
const client = new Discord.Client()
const axios = require('axios')

client.on("ready", () => {
    console.log('>> Logged in as ${client.user.tag}')
})

client.on('message', async msg => {
    async function getMeme(){
        const res = await axios.get('https://memeapi.pythonanywhere.com/');
        return res.data.memes[0].url;
    }
    switch (msg.content) {
        case "$ping":
            msg.reply("Client Latency: ${round(client.latency * 1000)}ms");
            break;
        case "!meme":
//          msg.channel.send("");
            const img = await getMeme();
            msg.channel.send(img);
            break;
    }
})

client.login(process.env.TOKEN)
