const express = require('express')
const bodyParser = require('body-parser')
const vk = require('node-vk-bot-api');
const fs = require('fs');
const app = express()

let settings = process.env;
if (fs.existsSync('./settings.json')) settings = require('./settings.json');

const bot = new vk(settings.vktoken);


bot.startPolling(() => {
    console.log('[BOT] Бот успешно запущен!');
});



bot.on((answer) => { 
   let message = answer.message; 
    if (message.text == '/start') return answer.reply('[Sanders prod.®] Successful launch!\nPeer ID Беседы: ' + message.peer_id + ' | From ID ' + message.from_id); 
    if (message.text == 'хуй') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
    if (message.text == 'блядь') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
    if (message.text == 'ахуел') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
    if (message.text == 'пизда') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
    if (message.text == 'пиздец') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
    if (message.text == 'долбаеб') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
    if (message.text == 'пиздабол') return answer.reply('[System anti-mat] Система анти-мат, не матерись, маме расскажу!');
});
    
bot.command('+peer', (ctx) => {
    ctx.reply(`Peer ID -  ${ctx.message.peer_id}`)
});  

bot.command('+from', (ctx) => {
    ctx.reply(`From ID -  ${ctx.message.from_id}`)
});  

bot.command('+user', (ctx) => {
    ctx.reply(`Users ID -  ${ctx.message.user_id}`)
});  

// bot.command('+payload', (ctx) => {
//     ctx.reply(`Payload -  ${messages.getConversationMembers}`)
// });  

bot.command('+dz', (ctx) => {
    ctx.reply(`тут будет наше дз`)
});  

bot.command('+schedule', (ctx) => {
    ctx.reply(`тут будет наше расписание`)
});  


