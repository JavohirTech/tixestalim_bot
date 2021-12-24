const TelegramApi = require('node-telegram-bot-api');
const API = "5059439767:AAHQS87a7-xWfsAh70CTuE11ZUM9oASJP7A";

const bot = new TelegramApi(API, {polling: true});

bot.on('message', msg =>{
    const text = msg.text;
    const chatID = msg.chat.id;
    const channelID = '-1001415451045';


    if(text === '/start'){
        bot.sendMessage(chatID, "✋Assalomu Alaykum! \n TixesTa'limga Xush kelibsiz! \n Bu yerda siz o'zingiz qiziqqan soha bo'yicha Bepul Ta'lim olishingiz mumkin! \n 🚀 TixesPro kurslarimizni sotib olgan holda o'z yo'nalishingizni Professional darajada o'rganishingiz mumkin! \n\n0dan Mastergacha... \n\n @TixesTalim_bot", {
            "reply_markup": {
                "resize_keyboard": true,
                "keyboard": [["▶️ Darslar", "🚀 TixesPro"], ["ℹ️ Biz haqimizda"]]
            }
        });
    }

    if(text === "ℹ️ Biz haqimizda"){
        bot.sendMessage(chatID, `✋ Assalomu Alaykum ! \n Bizning loyihaga qiziqaningizdan hursandmiz. \nBiz bilan bog'lanish @Javohir_Coders \n \n \nBu loyiha 22.12.2021 da ishga tushirildi.`)
    }

    if(text === "▶️ Darslar"){
        bot.sendMessage(chatID, "Bepul darslarimizga xush kelibsiz!", {
            "reply_markup": {
                "resize_keyboard": true,
                "keyboard": [["🟠 HTML5", "🔷 CSS", "🟨 JS"]]
            }
        });
    }

    if(text === "🟠 HTML5"){
        bot.copyMessage(chatID, channelID, 2)
    }

    if(text === "🔷 CSS" || text === "🟨 JS" || text==="🚀 TixesPro"){
        bot.sendMessage(chatID, "😊 Insha Alloh endi bo'ladi...")
    }













    console.log(msg);



})