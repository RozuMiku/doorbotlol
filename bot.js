const Discord = require('discord.js');
const auth = require("./auth.json");
const bot = new Discord.Client();
var doorCount = 0;

bot.on('message',(message) => {

    if(message.content == 'door' || message.content == 'Door' || message.content == 'DOOR'){
	message.channel.send('DOOR STUCK');
    }

    if(message.content == ':)'){
	message.channel.send(';)');
    }
    
    if(message.content == '!doorstuck'){
	doorCount++;
    }
    
    if(message.content == '!doorstuck' && doorCount > 1){
	const LUL = bot.emojis.get("398320952850513922");
	message.channel.send('Ryan has said "DOOR STUCK" ' + doorCount + ' times ' + LUL);
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

bot.login(auth.token);
