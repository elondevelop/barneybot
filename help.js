const Discord = require('discord.js');
const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Commands')
	.setDescription('All of the current commands for Barney')
	.addFields(
		{ name: '?ping', value: 'Test Command'},
	)
	.addFields(
		{name : '?kick', value: 'Instantly kicks any member in the server if user is an Admin [?kick @MEMBER]' }
	)
	.addFields(
		{name : '?ban', value: 'Instantly bans any member in the server if user is an Admin [?ban @MEMBER]' }
	)
	.setFooter('Report any bugs found to: elon#6471')
    .setTimestamp()

exports.run = (client, message, args) => {
    message.channel.send(helpEmbed)
}