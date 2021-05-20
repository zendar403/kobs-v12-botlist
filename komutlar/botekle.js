const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../botlist.json')

exports.run = async(client, message, args) => {

  if(message.channel.id !== botlist.başvurukanal) return message.channel.send(`<#${botlist.başvurukanal}>`)


let botid = args[0]
let prefix = args[1]
if(!botid) return message.channel.send("Enter a bot ID")
if(!prefix) return message.channel.send("Enter a prefix.")
message.delete()
  
message.channel.send("✅ **|** Your bot sent succesful. Please wait.")
  
  client.channels.cache.get(botlist.log).send(`<@&${botlist.yetkili}>`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField(`Bot ID`, ` \`\`\`${botid}\`\`\` `)
   .addField(`Bot Sahip`, ` \`\`\`${message.author.tag}\`\`\` `)
   .addField(`Prefix`, ` \`\`\`${prefix}\`\`\` `)
  .addField(`Ekle`,`[0 Perm](https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=0&scope=bot) **|** [8 Perm](https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot)`)
client.channels.cache.get(botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ekle"
}


