const vk = require('node-vk-bot-api');
const fs = require('fs');

let settings = process.env;
if (fs.existsSync('./settings.json')) settings = require('./settings.json');

const bot = new vk(settings.vktoken);


bot.startPolling(() => {
    console.log('[BOT] Бот успешно запущен!');
    console.log('[BOT] Started')
});

const getSessionKey = (ctx) => {
    const userId = ctx.message.from_id || ctx.message.user_id;
   
    return `${userId}:${userId}`;
};

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
    if (message.text == '+peer') return answer.reply('[Info] Peer ID - ' + message.peer_id);
    if (message.text == '+from') return answer.reply('[Info] From ID - ' + message.from_id);
    if (message.text == '+user') return answer.reply('[Info] You ID - ' + message.user_id);
    if (message.text == '+dz') return answer.reply('[Info] \n Домашняя работа: \n Rabota tut budet ');
    let text;
    if (message.text == 'спс') return answer.reply('Пожалуйста, лох!');
     if (message.text == 'спасибо') return answer.reply('Пожалуйста, лох!');
     if (message.text == 'Спасибо') return answer.reply('Пожалуйста, лох!');
    if (message.text == text) return answer.reply('[Error] Команды не найдено!');
});
    
// bot.command('+peer', (ctx) => {
//     ctx.reply(`Peer ID -  ${ctx.message.peer_id}`)
// });  

// bot.command('+from', (ctx) => {
//     ctx.reply(`From ID -  ${ctx.message.from_id}`)
// });  

// bot.command('+user', (ctx) => {
//     ctx.reply(`Users ID -  ${ctx.message.user_id}`)
// });  

// // bot.command('+payload', (ctx) => {
// //     ctx.reply(`Payload -  ${messages.getConversationMembers}`)
// // });  

// bot.command('+dz', (ctx) => {
//     ctx.reply(`тут будет наше дз`)
// });  

// bot.command('+schedule', (ctx) => {
//     ctx.reply(`тут будет наше расписание`)
// });  



bot.sendMessage([234621418, 525097367], '[Sanders prod.®] Successful launch!\n [Sanders prod.®] Я запустился, рестарт прошел успешно\n [Sanders prod.®] Successful restart!')

function logEvery2Seconds(i) {
    setTimeout(() => {
        console.log('Infinite Loop Test n:', i);
        logEvery2Seconds(++i);
    }, 2000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
bot.sendMessage([306794400], 'Андрей прости надо проверить макс скросоть флуда')

}, 50)
