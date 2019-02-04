const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '760685445:AAFzAdbUUe_odoXBiUpJoTs5QzTbMNBpxTM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from Lviv, bot says: "Hi, ${msg.from.first_name}"`)
})
