export const showMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Выберете действие", {
    reply_markup: {
      keyboard: [["Картинки котиков"], ["Картинки собачек"], ["Закрыть меню"]],
    },
  });
};

export const closeMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Клавиатура закрыта", {
    reply_markup: { remove_keyboard: true },
  });
};
