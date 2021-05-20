const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../botlist.json')

exports.run = async(client, message, args) => {

  if(message.channel.id !== botlist.başvurukanal) return message.channel.send(`<#${botlist.başvurukanal}>`)


let botid = args[0]
let prefix = args[1]
if(!botid) return message.channel.send("Enter a valid bot ID.")
if(!prefix) return message.channel.send("Enter your bot's prefix.")
message.delete()
  
message.channel.send("✅ **|** Please wait until your bot gets approved, then you can test it.")
  
  client.channels.cache.get(botlist.log).send(`<@&${botlist.yetkili}>`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField(`Bot ID`, ` \`\`\`${botid}\`\`\` `)
   .addField(`Bot Owner`, ` \`\`\`${message.author.tag}\`\`\` `)
   .addField(`Prefix`, ` \`\`\`${prefix}\`\`\` `)
  .addField(`Add`,`[0 Perm](https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=0&scope=bot) **|** [8 Perm](https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot)`)
client.channels.cache.get(botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "add"
}


