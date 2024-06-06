import axios from "axios";
import { config } from "./config.js";

export const getDog = async () => {
  try {
    const response = await axios.get(config.dogUrl);
    console.log(response?.data[0]?.url); // Выводим данные на консоль для отладки
    return response?.data[0]?.url;
  } catch (error) {
    console.error("Error fetching dog data:", error);
    return null; // Возвращаем значение по умолчанию при ошибке
  }
};
