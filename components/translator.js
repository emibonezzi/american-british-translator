const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  capitalizeTitle(title) {
    return title
      .split("")
      .map((item, i) => {
        if (i === 0) {
          return item.toUpperCase();
        } else {
          return item;
        }
      })
      .join("");
  }

  translate(text, locale) {
    let wordsArr = text.split(" ").map((item) => item.replace(/\W+/, ""));
    let titlesArr = text
      .split(" ")
      .filter(
        (item) =>
          Object.keys(americanToBritishTitles).includes(item.toLowerCase()) ||
          Object.values(americanToBritishTitles).includes(item.toLowerCase())
      );
    let timeArr = text.split(" ").filter((item) => /^\d+[:\.]\d+$/.test(item));
    let changesMade = false;

    // US to UK
    if (locale === "american-to-british") {
      let bigUsList = { ...americanOnly, ...americanToBritishSpelling };

      // check for words
      for (let word of wordsArr) {
        for (let term of Object.keys(bigUsList)) {
          if (term.split(" ").includes(word.toLowerCase())) {
            console.log("Replacing..", word, "with", bigUsList[term])
            text = text.replace(
              word,
              `<span class="highlight">${bigUsList[term]}</span>`
            );
            changesMade = true;
          }
        }

        /* if (Object.keys(bigUsList).includes(word.toLowerCase())) {
          text = text.replace(
            word,
            `<span class="highlight">${bigUsList[word.toLowerCase()]}</span>`
          );
          changesMade = true;
        } */
      }

      // check for titles
      for (let title of titlesArr) {
        if (
          Object.keys(americanToBritishTitles).includes(title.toLowerCase())
        ) {
          text = text.replace(
            title,
            `<span class="highlight">${this.capitalizeTitle(
              americanToBritishTitles[title.toLowerCase()]
            )}</span>`
          );
          changesMade = true;
        }
      }

      // check for times
      if (timeArr.length > 0) {
        for (let time of timeArr) {
          let newTime = time.replace(":", ".");
          text = text.replace(
            time,
            `<span class="highlight">${newTime}</span>`
          );
          changesMade = true;
        }
      }

      // check if no changes
      if (!changesMade) {
        text = "Everything looks good to me!"
      }

    } 

    // UK to US 
    if (locale === "british-to-american") {

      // flip dictionaries
      let britishToAmericanSpelling = {};
      let britishToAmericanTitle = {};
      for (let [key, value] of Object.entries(americanToBritishSpelling)) {
        britishToAmericanSpelling[value] = key;
      }
      for (let [key, value] of Object.entries(americanToBritishTitles)) {
        britishToAmericanTitle[value] = key;
      }

      let bigUkList = {...britishOnly, ...britishToAmericanSpelling}

      // check for words
      for (let word of wordsArr) {
        if (Object.keys(bigUkList).includes(word.toLowerCase())) {
          text = text.replace(
            word,
            `<span class="highlight">${bigUkList[word.toLowerCase()]}</span>`
          );
          changesMade = true;
        }
      }

      // check for titles
      for (let title of titlesArr) {
        if (
          Object.keys(britishToAmericanTitle).includes(title.toLowerCase())
        ) {
          text = text.replace(
            title,
            `<span class="highlight">${this.capitalizeTitle(
              britishToAmericanTitle[title.toLowerCase()]
            )}</span>`
          );
          changesMade = true;
        }
      }

      // check for times
      if (timeArr.length > 0) {
        for (let time of timeArr) {
          let newTime = time.replace(".", ":");
          text = text.replace(
            time,
            `<span class="highlight">${newTime}</span>`
          );
          changesMade = true;
        }
      }


      // check if no changes
      if (!changesMade) {
        text = "Everything looks good to me!"
      }
    }

    // remove duplicates
    text = [...new Set(text.split(/\s(?=<span)|(?<=\>)\s/))].join(" ")
    console.log(text);

    return text;
  }
}
let translator = new Translator();
translator.translate("To play hooky means to skip class or work.", "american-to-british")

module.exports = Translator;
