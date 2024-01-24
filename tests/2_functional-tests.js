const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // Translation with text and locale fields: POST request to /api/translate
  test("Translation with text and locale fields: POST request to /api/translate", function(done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british"
      })
      .end(function(err, res) {
        assert.hasAllKeys(res.body, ["text", "translation"])
        done()
      })
  })

  // Translation with text and invalid locale field: POST request to /api/translate
  test("Translation with text and invalid locale field: POST request to /api/translate", function(done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-britis"
      })
      .end(function(err, res) {
        assert.hasAllKeys(res.body, ["error"])
        done()
      })
  })

  // Translation with missing text field: POST request to /api/translate
  test("Translation with missing text field: POST request to /api/translate", function(done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: undefined,
        locale: "american-to-british"
      })
      .end(function(err, res) {
        assert.hasAllKeys(res.body, ["error"])
        assert.strictEqual(res.body.error, "Required field(s) missing")
        done()
      })
  })

  // Translation with missing locale field: POST request to /api/translate
  test("Translation with missing locale field: POST request to /api/translate", function(done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: ""
      })
      .end(function(err, res) {
        assert.hasAllKeys(res.body, ["error"])
        assert.strictEqual(res.body.error, "Required field(s) missing")
        done()
      })
  })

  // Translation with empty text: POST request to /api/translate
  test("Translation with empty text: POST request to /api/translate", function(done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british"
      })
      .end(function(err, res) {
        assert.hasAllKeys(res.body, ["error"])
        assert.strictEqual(res.body.error, "")
        done()
      })
  })
});
