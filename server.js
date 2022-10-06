const express = require('express');
const {appConfig} = require('./config');
const {Telegraf, Composer} = require('telegraf');

const app = express();

const bot = new Telegraf(appConfig.BOT_TOKEN);
const composer = new Composer();

bot.use(require('./controllers/bot/bot.controller'));
bot.use(composer);
bot.launch();

app.listen(appConfig.PORT, () => {
    console.log(`Server is run port ${appConfig.PORT} ...`);
});