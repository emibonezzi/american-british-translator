const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  // Translate Mangoes are my favorite fruit. to British English
  test("Translate Mangoes are my favorite fruit. to British English", function (done) {
    let usSentence = "Mangoes are my favorite fruit.";
    let solution = "Mangoes are my favourite fruit.";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate I ate yogurt for breakfast. to British English
  test("I ate yogurt for breakfast.", function (done) {
    let usSentence = "I ate yogurt for breakfast.";
    let solution = "I ate yoghurt for breakfast.";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate We had a party at my friend's condo. to British English
  test("We had a party at my friend's condo.", function (done) {
    let usSentence = "We had a party at my friend's condo.";
    let solution = "We had a party at my friend's flat.";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Can you toss this in the trashcan for me? to British English
  test("Can you toss this in the trashcan for me?", function (done) {
    let usSentence = "Can you toss this in the trashcan for me?";
    let solution = "Can you toss this in the bin for me?";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate The parking lot was full. to British English
  test("The parking lot was full.", function (done) {
    let usSentence = "The parking lot was full.";
    let solution = "The car park was full.";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Like a high tech Rube Goldberg machine. to British English
  test("Like a high tech Rube Goldberg machine.", function (done) {
    let usSentence = "Like a high tech Rube Goldberg machine.";
    let solution = "Like a high tech Heath Robinson device.";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate To play hooky means to skip class or work. to British English
  test("To play hooky means to skip class or work.", function (done) {
    let usSentence = "To play hooky means to skip class or work.";
    let solution = "Like a high tech Heath Robinson device.";
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale).replace(`<span class="highlight">`, "").replace("</span>", "")
    assert.strictEqual(translatedSentence, solution);
    done();
  });

});
