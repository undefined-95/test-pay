const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  number: {
    type: String,
    maxLength: [16, "Введите правильный номер"],
    minLength: [16, "Введите правильный номер"],
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    maxLength: [3, "Введите правильный код"],
    minLength: [3, "Введите правильный код"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
