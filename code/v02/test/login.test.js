const login = require("../src/login");

describe("login function", () => {
  test("should return true for valid credentials", async () => {
    const passwordFileName = "../data/passwords.txt";

    const username = "user1";
    const password = "password1";

    const result = await login(passwordFileName, username, password);

    expect(result).toBe(true);
  });

  test("should return false for invalid credentials", async () => {
    const passwordFileName = "../data/passwords.txt";
    const username = "user1";
    const password = "invalidpassword";

    const result = await login(passwordFileName, username, password);

    expect(result).toBe(false);
  });

  test("should return false for empty password", async () => {
    const passwordFileName = "../data/passwords.txt";
    const username = "user1";
    const password = "";

    const result = await login(passwordFileName, username, password);

    expect(result).toBe(false);
  });

  test("should return false for missing password file", async () => {
    const passwordFileName = "./data/nonexistent.txt";
    const username = "user1";
    const password = "password1";

    const result = await login(passwordFileName, username, password);

    expect(result).toBe(false);
  });
});
