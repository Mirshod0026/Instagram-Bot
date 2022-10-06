const { Composer } = require("telegraf");
const { InstagramController } = require("./instagramm");
const isValidUrl = require("../../isvalidUrl");
const bot = new Composer();

bot.on("text", async (ctx) => {
  const example =
    "https://www.instagram.com/reel/CiUiNXEoiMu/?igshid=YmMyMTA2M2Y=";
  const text = ctx.message.text;

  const user = {
    fullName: `${ctx.message.chat.first_name} ${ctx.message.chat.last_name}`,
  };

  if (text == example) {
    return ctx.sendMessage(`Iltimos <b>Instagramdan</b> dan link jo'nating`, {
      parse_mode: "HTML",
    });
  }

  if (text == "/start") {
    return ctx.reply(
      `Assalomu alaykum <b>${user.fullName}</b>.\n\nBu botga <b>Instagram</> dan link jo'nating\nva <b>video</b> tarzida qabul qilib oling.`,
      {
        parse_mode: "HTML",
      }
    );
  }

  if (text != "/start") {
    if (isValidUrl(text)) {
      const result = await InstagramController.Insta_Convertor_Video(text);
      ctx.sendMessage(`Iltimos biroz kuting... 😎`);

      return ctx.sendVideo(result);
    }
    if (!isValidUrl(text)) {
      return ctx.reply(
        `Siz mos kelmagan havola jo'natyapsiz. Bizga <b>Instagramdan</b> havola jo'nating.\n\nNamuna: ${example} <a href='https://www.instagram.com/reel/CiUiNXEoiMu/?igshid=YmMyMTA2M2Y='></a>`, {
          parse_mode: 'HTML'
        }

      );
    }
  }
  
});

module.exports = bot;
