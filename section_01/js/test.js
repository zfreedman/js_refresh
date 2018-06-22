"use strict";
describe("pow", function() {
  describe("handles numerics", function() {
    before(() => console.log("running numeric tests"));
    after(() => console.log("finished numeric tests"));

    beforeEach(() => console.log("executing test"));
    afterEach(() => console.log("finishing test"));

    it("2^3 = 8", function() {
      assert.equal(pow(2, 3), 8);
    });

    it("3^5 = 243", function() {
      assert.equal(pow(3, 5), 243);
    });

    it("17^0 = 1", function() {
      assert.equal(pow(17, 0), 1);
    });

    it("394^1 = 394", function() {
      assert.equal(pow(394, 1), 394);
    });

    it("1^417 = 1", function() {
      assert.equal(pow(1, 417), 1);
    });
  });
});
