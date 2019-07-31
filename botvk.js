const vk = require('node-vk-bot-api');
const fs = require('fs');

let settings = process.env;
if (fs.existsSync('./settings.json')) settings = require('./settings.json');

const bot = new vk(settings.vktoken);
let text;

bot.startPolling(() => {
  console.log('[BOT] Бот успешно запущен!');
});

bot.on((answer) => {
    let message = answer.message;
    if (message.text == '!id') return answer.reply('Peer ID Беседы: ' + message.peer_id + ' | From ID ' + message.from_id);
});
