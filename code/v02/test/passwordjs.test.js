const passwordjs = require("../src/passwordjs");
const login = require("../src/login");
const { makepassword } = require("../src/makepassword");

jest.mock("../src/login");
jest.mock("../src/makepassword");

describe("passwordjs", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("returns false if incorrect number of arguments", async () => {
    process.argv = ["node", "passwordjs.js"];
    expect(await passwordjs()).toBe(false);
  });

  test("returns false if login is not valid", async () => {
    process.argv = ["node", "passwordjs.js", "filename", "email", "password"];
    login.mockResolvedValue(false);
    expect(await passwordjs()).toBe(false);
  });

  test("calls makepassword() and returns true if login is valid", async () => {
    process.argv = ["node", "passwordjs.js", "filename", "email", "password"];
    login.mockResolvedValue(true);
    makepassword.mockResolvedValue();
    expect(await passwordjs()).toBe(true);
    expect(makepassword).toHaveBeenCalledWith(
      "filename",
      "../data/password.enc.txt"
    );
  });

  test("returns false if error occurs", async () => {
    process.argv = ["node", "passwordjs.js", "filename", "email", "password"];
    login.mockRejectedValue(new Error("Something went wrong"));
    console.error = jest.fn();
    expect(await passwordjs()).toBe(false);
    expect(console.error).toHaveBeenCalledWith("Error:", expect.any(Error));
  });
});
