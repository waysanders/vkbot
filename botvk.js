const { Bot, Keyboard } = require('node-vk-bot')

const bot = new Bot({
  token: process.env.vktoken,
  group_id: 182036184
}).start()

bot.get(/Hi|Hello|Hey/i, (message, exec, reply) => {
  const keyboard = new Keyboard().addButton('Hi!')
  const options =  { forward_messages: message.id, keyboard }

  reply('Hello!', options)
})