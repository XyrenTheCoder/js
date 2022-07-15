const {Client, Intents} = require("discord.js");
const intents = new Intents(32767);
const client = new Client({intents});

// const axios = require('axios');
const keepAlive = require("./keepAlive.js");

client.on("ready", () => {
    console.log(`>> Logged in as ${client.user.tag}`)
})

client.on('message', async msg => {
    
    switch (msg.content) {
        case "$ping":
            msg.reply(`Client Latency: ${Date.now() - msg.createdTimestamp}ms`);
            break;
    }
})
    
keepAlive;
client.login('token')
