const TelegramApi = require('node-telegram-bot-api');
const API = "5059439767:AAHQS87a7-xWfsAh70CTuE11ZUM9oASJP7A";

const bot = new TelegramApi(API, {polling: true});

bot.on('message', msg =>{
    const text = msg.text;
    const chatID = msg.chat.id;
    const channelID = '-1001415451045';


    if(text === '/start'){
        bot.sendMessage(chatID, "โAssalomu Alaykum! \n TixesTa'limga Xush kelibsiz! \n Bu yerda siz o'zingiz qiziqqan soha bo'yicha Bepul Ta'lim olishingiz mumkin! \n ๐ TixesPro kurslarimizni sotib olgan holda o'z yo'nalishingizni Professional darajada o'rganishingiz mumkin! \n\n0dan Mastergacha... \n\n @TixesTalim_bot", {
            "reply_markup": {
                "resize_keyboard": true,
                "keyboard": [["โถ๏ธ Darslar", "๐ TixesPro"], ["โน๏ธ Biz haqimizda"]]
            }
        });
    }

    if(text === "โน๏ธ Biz haqimizda"){
        bot.sendMessage(chatID, `โ Assalomu Alaykum ! \n Bizning loyihaga qiziqaningizdan hursandmiz. \nBiz bilan bog'lanish @Javohir_Coders \n \n \nBu loyiha 22.12.2021 da ishga tushirildi.`)
    }

    if(text === "โถ๏ธ Darslar"){
        bot.sendMessage(chatID, "Bepul darslarimizga xush kelibsiz!", {
            "reply_markup": {
                "resize_keyboard": true,
                "keyboard": [["๐  HTML5", "๐ท CSS", "๐จ JS"]]
            }
        });
    }

    if(text === "๐  HTML5"){
        bot.copyMessage(chatID, channelID, 2)
    }

    if(text === "๐ท CSS" || text === "๐จ JS" || text==="๐ TixesPro"){
        bot.sendMessage(chatID, "๐ Insha Alloh endi bo'ladi...")
    }













    console.log(msg);



})