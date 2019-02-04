const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '760685445:AAFzAdbUUe_odoXBiUpJoTs5QzTbMNBpxTM'

const bot = new TelegramBot(TOKEN, {polling: true});