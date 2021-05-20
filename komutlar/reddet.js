const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../botlist.json')
exports.run = async(client, message, args) => {
  
	if(!message.member.roles.cache.has(botlist.yetkili)) return message.channel.send("You can't use this command.")
  if(message.channel.id !== botlist.kanalyetkili) return message.channel.send(` <#${botlist.kanalyetkili}>`)

let botid = args[0]
let sahip = args[1]
let sebep = args.slice(2).join(' ')
if(!botid) return message.channel.send("Enter a valid bot ID.").then(a => a.delete(20000))
if(!sahip) return message.channel.send("Enter owner's ID.").then(a => a.delete(20000))
  if(!sebep) return message.channel.send("Enter reason.").then(a => a.delete(20000))
message.delete()
  
message.channel.send("✅ **|** Bot Refused")
  
 message.guild.members.cache.get(sahip).send(`❌ **|** <@${botid}> Refused`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
.setDescription(`❌  **|**  <@${botid}> Refused. Reason: **${sebep}**`)
client.channels.cache.get(botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "refuse"
}


