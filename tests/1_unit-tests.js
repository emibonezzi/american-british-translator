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
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate I ate yogurt for breakfast. to British English
  test("I ate yogurt for breakfast.", function (done) {
    let usSentence = "I ate yogurt for breakfast.";
    let solution = "I ate yoghurt for breakfast.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate We had a party at my friend's condo. to British English
  test("We had a party at my friend's condo.", function (done) {
    let usSentence = "We had a party at my friend's condo.";
    let solution = "We had a party at my friend's flat.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Can you toss this in the trashcan for me? to British English
  test("Can you toss this in the trashcan for me?", function (done) {
    let usSentence = "Can you toss this in the trashcan for me?";
    let solution = "Can you toss this in the bin for me?";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate The parking lot was full. to British English
  test("The parking lot was full.", function (done) {
    let usSentence = "The parking lot was full.";
    let solution = "The car park was full.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Like a high tech Rube Goldberg machine. to British English
  test("Like a high tech Rube Goldberg machine.", function (done) {
    let usSentence = "Like a high tech Rube Goldberg machine.";
    let solution = "Like a high tech Heath Robinson device.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate To play hooky means to skip class or work. to British English
  test("To play hooky means to skip class or work.", function (done) {
    let usSentence = "To play hooky means to skip class or work.";
    let solution = "To bunk off means to skip class or work.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // No Mr. Bond, I expect you to die.
  test("No Mr. Bond, I expect you to die.", function (done) {
    let usSentence = "No Mr. Bond, I expect you to die.";
    let solution = "No Mr Bond, I expect you to die.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Lunch is at 12:15 today. to British English
  test("Lunch is at 12:15 today.", function (done) {
    let usSentence = "Lunch is at 12:15 today.";
    let solution = "Lunch is at 12.15 today.";
    let locale = "american-to-british";
    let translatedSentence = translator
      .translate(usSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate We watched the footie match for a while. to American English
  test("We watched the footie match for a while.", function (done) {
    let ukSentence = "We watched the footie match for a while.";
    let solution = "We watched the soccer match for a while.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Paracetamol takes up to an hour to work. to American English
  test("Paracetamol takes up to an hour to work.", function (done) {
    let ukSentence = "Paracetamol takes up to an hour to work.";
    let solution = "Tylenol takes up to an hour to work.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate First, caramelise the onions. to American English
  test("First, caramelise the onions.", function (done) {
    let ukSentence = "First, caramelise the onions.";
    let solution = "First, caramelize the onions.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate I spent the bank holiday at the funfair. to American English
  test("I spent the bank holiday at the funfair.", function (done) {
    let ukSentence = "I spent the bank holiday at the funfair.";
    let solution = "I spent the public holiday at the carnival.";
    let locale = "british-to-american";
    let translatedSentence = translator.translate(ukSentence, locale);
    assert.strictEqual(
      translatedSentence
        .replace(/<span class="highlight">/g, "")
        .replace(/<\/span>/g, ""),
      solution,
    );
    done();
  });

  // Translate I had a bicky then went to the chippy. to American English
  test("I had a bicky then went to the chippy.", function (done) {
    let ukSentence = "I had a bicky then went to the chippy.";
    let solution = "I had a cookie then went to the fish-and-chip shop.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate I've just got bits and bobs in my bum bag. to American English
  test("I've just got bits and bobs in my bum bag.", function (done) {
    let ukSentence = "I've just got bits and bobs in my bum bag.";
    let solution = "I've just got odds and ends in my fanny pack.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate The car boot sale at Boxted Airfield was called off. to American English
  test("The car boot sale at Boxted Airfield was called off.", function (done) {
    let ukSentence = "The car boot sale at Boxted Airfield was called off.";
    let solution = "The swap meet at Boxted Airfield was called off.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Have you met Mrs Kalyani? to American English
  test("Have you met Mrs Kalyani?", function (done) {
    let ukSentence = "Have you met Mrs Kalyani?";
    let solution = "Have you met Mrs. Kalyani?";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Prof Joyner of King's College, London. to American English
  test("Prof Joyner of King's College, London.", function (done) {
    let ukSentence = "Prof Joyner of King's College, London.";
    let solution = "Prof. Joyner of King's College, London.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Translate Tea time is usually around 4 or 4.30. to American English
  test("Tea time is usually around 4 or 4.30.", function (done) {
    let ukSentence = "Tea time is usually around 4 or 4.30.";
    let solution = "Tea time is usually around 4 or 4:30.";
    let locale = "british-to-american";
    let translatedSentence = translator
      .translate(ukSentence, locale)
      .replace(/<span class="highlight">/g, "")
      .replace(/<\/span>/g, "");
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Highlight translation in Mangoes are my favorite fruit.
  test("Mangoes are my favorite fruit.", function (done) {
    let usSentence = "Mangoes are my favorite fruit.";
    let solution = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale);
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Highlight translation in I ate yogurt for breakfast.
  test("I ate yogurt for breakfast.", function (done) {
    let usSentence = "I ate yogurt for breakfast.";
    let solution = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale);
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Highlight translation in We watched the footie match for a while.
  test("I ate yogurt for breakfast.", function (done) {
    let usSentence = "I ate yogurt for breakfast.";
    let solution = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
    let locale = "american-to-british";
    let translatedSentence = translator.translate(usSentence, locale);
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Highlight translation in We watched the footie match for a while.
  test("We watched the footie match", function (done) {
    let usSentence = "We watched the footie match";
    let solution = `We watched the <span class="highlight">soccer</span> match`;
    let locale = "british-to-american";
    let translatedSentence = translator.translate(usSentence, locale);
    assert.strictEqual(translatedSentence, solution);
    done();
  });

  // Highlight translation in Paracetamol takes up to an hour to work.
  test("Paracetamol takes up to an hour to work.", function (done) {
    let usSentence = "Paracetamol takes up to an hour to work.";
    let solution = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
    let locale = "british-to-american";
    let translatedSentence = translator.translate(usSentence, locale);
    assert.strictEqual(translatedSentence, solution);
    done();
  });
});
