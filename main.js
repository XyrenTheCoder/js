const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "!ping") {
    msg.reply("Client Latency: ${round(client.latency * 1000)}ms");
  }
})

client.login(process.env.TOKEN)
