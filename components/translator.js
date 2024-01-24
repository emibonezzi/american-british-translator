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

  checkMultipleTerms(arr, locale) {
    // US to UK
    if (locale === "american-to-british") {
      let fullWord = [];
      let wordsToJoin = [];
      let indexToReplace = [];

      for (let term of Object.keys(americanOnly)) {
        fullWord = [];
        for (let i = 0; i < arr.length; i++) {
          // if term contains more than 1 word
          if (term.split(" ").length > 1) {
            // loop through term to establish exact match
            for (let singularWord of term.split(" ")) {
              // if singularWord matches add word to fullWord
              if (arr[i].toLowerCase() === singularWord) {
                console.log(arr[i], "is equal to", singularWord, "of", term);
                indexToReplace.push(i);
                fullWord.push(arr[i]);
                console.log("Current word is:", fullWord.join(" ").toLowerCase())
                console.log("Current term is:", term)
                if (term === fullWord.join(" ").toLowerCase()) {
                  console.log("MA ALLORA PORCA MAD")
                  console.log(fullWord);
                  fullWord = [...new Set(fullWord)]; // delete possible duplicates
                  wordsToJoin.push({
                    word: fullWord.join(" "),
                    indexes: indexToReplace,
                  });

                  fullWord = [];
                  indexToReplace = [];
                } 
              }
            }
          }
        }
      }

      console.log(wordsToJoin);
      console.log(fullWord);

      let allIndexes = [];

      // start replacing involved words with their full words
      for (let word of wordsToJoin) {
        for (let index of word.indexes) {
          if (!allIndexes.includes(index)) {
            allIndexes.push(index)
            arr[index] = word.word
          } else {
            // in case of words already replaced check length and pick the longer one
            if (!arr[index].length > word.word) {
              arr[index] = word.word;
            }
          }
        }
      }
    } else {
      // UK to US
      let fullWord = [];
      let wordsToJoin = [];
      let indexToReplace = [];

      for (let term of Object.keys(britishOnly)) {
        fullWord = [];
        for (let i = 0; i < arr.length; i++) {
          // if term contains more than 1 word
          if (term.split(" ").length > 1) {
            // loop through term to establish exact match
            for (let singularWord of term.split(" ")) {
              // if singularWord matches add word to fullWord
              if (arr[i].toLowerCase() === singularWord) {
                console.log(arr[i], "is equal to", singularWord, "of", term);
                indexToReplace.push(i);
                fullWord.push(arr[i]);
                console.log("Current word is:", fullWord.join(" ").toLowerCase())
                console.log("Current term is:", term)
                if (term === fullWord.join(" ").toLowerCase()) {
                  console.log("MA ALLORA PORCA MAD")
                  console.log(fullWord);
                  fullWord = [...new Set(fullWord)]; // delete possible duplicates
                  wordsToJoin.push({
                    word: fullWord.join(" "),
                    indexes: indexToReplace,
                  });

                  fullWord = [];
                  indexToReplace = [];
                } 
              }
            }
          }
        }
      }

      console.log(wordsToJoin);
      console.log(fullWord);

      let allIndexes = [];

      // start replacing involved words with their full words
      for (let word of wordsToJoin) {
        for (let index of word.indexes) {
          if (!allIndexes.includes(index)) {
            allIndexes.push(index)
            arr[index] = word.word
          } else {
            // in case of words already replaced check length and pick the longer one
            if (!arr[index].length > word.word) {
              arr[index] = word.word;
            }
          }
        }
      }
    }

    // clean array from duplicates
    let cleanedArr = [...new Set(arr)];

    // return arr with multiple terms together
    return cleanedArr;
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
    let timeArr = text
      .split(" ")
      .filter((item) => /^\d+[:\.]\d+/.test(item))
      .map((item) => item.replace(/(?<=\d+)\.$/, ""));
    let changesMade = false;

    // US to UK
    if (locale === "american-to-british") {
      let bigUsList = { ...americanOnly, ...americanToBritishSpelling };

      // check multiple terms
      wordsArr = this.checkMultipleTerms(wordsArr, locale);

      console.log(wordsArr);

      // check for words
      for (let word of wordsArr) {
        if (Object.keys(bigUsList).includes(word.toLowerCase())) {
          text = text.replace(
            word,
            `<span class="highlight">${bigUsList[word.toLowerCase()]}</span>`
          );

          changesMade = true;
        }
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
        text = "Everything looks good to me!";
      }
    }

    // UK to US
    if (locale === "british-to-american") {
      // check multiple terms
      wordsArr = this.checkMultipleTerms(wordsArr, locale);
      // flip dictionaries
      let britishToAmericanSpelling = {};
      let britishToAmericanTitle = {};
      for (let [key, value] of Object.entries(americanToBritishSpelling)) {
        britishToAmericanSpelling[value] = key;
      }
      for (let [key, value] of Object.entries(americanToBritishTitles)) {
        britishToAmericanTitle[value] = key;
      }

      let bigUkList = { ...britishOnly, ...britishToAmericanSpelling };

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
        if (Object.keys(britishToAmericanTitle).includes(title.toLowerCase())) {
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
        text = "Everything looks good to me!";
      }
    }

    // remove duplicates
    // text = [...new Set(text.split(/\s(?=<span)|(?<=\>)\s/))].join(" ");
    console.log(text);

    return text;
  }
}
let translator = new Translator();
console.log(translator.translate(
  "I had a bicky then went to the chippy.",
  "british-to-american"
).replace(/<span class="highlight">/g, "")
.replace(/<\/span>/g, ""))

module.exports = Translator;
