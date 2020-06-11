const Warlock = require("../lib/Warlock");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Warlock("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Warlock"', () => {
  const testValue = "Warlock";
  const e = new Warlock("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Warlock("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
test('getMagic() should return "99"', () => {
  const testValue = "magic";
  const e = new Warlock("Foo", 1, "test@test.com", "GitHubUser", testValue);
  expect(e.getMagic()).toBe(testValue);
});
test('getHp() should return "99"', () => {
  const testValue = "hp";
  const e = new Warlock(
    "Foo",
    1,
    "test@test.com",
    "GitHubUser",
    "99",
    testValue
  );
  expect(e.getHp()).toBe(testValue);
});
