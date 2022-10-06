require('dotenv').config();

const appConfig = {
    PORT: process.env.PORT,
    BOT_TOKEN: process.env.BOT_TOKEN
}

module.exports = {
    appConfig
}