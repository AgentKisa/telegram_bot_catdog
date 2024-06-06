import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { getCat } from "./cat.js";
import { getDog } from "./dog.js";
import { showMenu, closeMenu } from "./menu.js";

const bot = new Telegraf(config.telegramToken, {});

bot.start((botMenu) => botMenu.reply(`Привет! Напишите слово "меню"`));

bot.on("message", async (botMenu) => {
  const chatId = botMenu.chat.id;

  if (botMenu.message.text == "меню") {
    showMenu(bot, chatId);
  } else if (botMenu.message.text == "Картинки котиков") {
    let cat = await getCat();
    botMenu.reply(cat);
  } else if (botMenu.message.text == "Картинки собачек") {
    let dog = await getDog();
    botMenu.reply(dog);
  } else {
    closeMenu(bot, chatId);
  }
});

bot.launch();
