const Discord = require('discord.js');
const bot = new Discord.Client();
var doorCount = 0;

bot.on('message',(message) => {

    if(message.content == 'door'){
	message.channel.send('DOOR STUCK');
    }
    
    if(message.content == '!doorstuck'){
	doorCount++;
    }
    
   if(message.content == '!doorstuck' && doorCount > 1){
	message.channel.send('Ryan has said "DOOR STUCK" ' + doorCount + ' times LUL');
   } else if(message.content == '!doorstuck' && doorCount == 1){
       const poggers = bot.emojis.get("398320950636052492");
       message.channel.send('Ryan has said "DOOR STUCK" for the first time ' + poggers);
   }

    if(message.content == '!unstuck'){
	const monkaS = bot.emojis.get("398320953232195604");
	message.reply("has unstuck the door..." + monkaS);
	doorCount = 0;
    }
});

bot.login('NDIxNzYwOTUwODE1OTQ4ODAw.DYSzAA.iN-GQ5vaNDf0B06uY1xe1OWjAPo');
