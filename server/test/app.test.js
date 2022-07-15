const request = require("supertest");

const app = require("../app");

describe("API", () => {
  let api;

  beforeAll(() => {
    api = app.listen(3030);
  });

  afterAll((done) => {
    api.close(done);
  });

  it("Responds to GET resquest at / with a 200 status", (done) => {
    request(api).get("/").expect(200, done);
  });

  it("Responds to GET resquest at / animals a 200 status", (done) => {
    request(api).get("/animals").expect(200, done);
  });

  it("Responds to GET resquest at / animals with a JSON object", (done) => {
    request(api).get("/animals").expect("Content-Type", /json/, done);
  });
  it("retrieves an animal by id", (done) => {
    request(api)
      .get("/animals/5")
      .expect(200)
      .expect({ animal: { id: 5, animal: "penguin", type: "aves" } }, done);
  });
});
