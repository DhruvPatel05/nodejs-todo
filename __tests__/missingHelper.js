const missingHelper = require("../utils/missingHelper");

test("missing helper should format text", () => {
  const result = missingHelper.formatText("hello");
  expect(result).toBe("HELLO");
});