"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const locales = ["american-to-british", "british-to-american"];
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    if (req.body.text === undefined) {
      res.json({ error: "Required field(s) missing" });
    } else if ((req.body.text = "")) {
      res.json({error: "No text to translate"})
    } else if (!req.body.locale) {
      res.json({ error: "Required field(s) missing" });
    } else if (!locales.includes(req.body.locale)) {
      res.json({ error: "Invalid value for locale field" });
    } else {
      res.json({
        text: req.body.text,
        translation: translator.translate(req.body.text, req.body.locale),
      });
    }
  });
};
