const Model = require("../models");

module.exports.cardController = {
  addPay: async (req, res) => {
    try {
      const { number, date, cvv, amount } = req.body;
       const pay = await Model.create({
          number,
          date,
          cvv,
          amount,
        });
        res.json({
            RequestId: pay._id,
            Amount: pay.amount
        });
    } catch (e) {
      res.json("Ой, возникла ошибка" + e);
    }
  },
  getPay: async (req, res) => {
    try {
      const events = await Model.find();
      res.json(events);
    } catch (e) {
      res.json("Ошибка при выводе событий " + e);
    }
  },
};
