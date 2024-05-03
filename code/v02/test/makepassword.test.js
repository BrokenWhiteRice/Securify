"use strict";

const fs = require("fs");
const { makepassword } = require("../src/makepassword");
const User = require("../models/Users");

jest.mock("fs");

describe("test on makepassword()", () => {
  fs.existsSync.mockReturnValue(true);

  fs.readFileSync.mockReturnValue("user1:password1\nuser2:password2\n");
  fs.writeFileSync.mockReturnValue();

  User.create = jest.fn();
  const passwordFileName = "./passwordtest.txt";
  const passwordEncFileName = "./passwordtest.enc.txt";

  test("should create passwords and upload to MongoDB", async () => {
    const passwordFileName = "../data/password.txt";
    const passwordEncFileName = "../data/password.enc.txt";

    await makepassword(passwordFileName, passwordEncFileName);

    expect(User.create).toHaveBeenCalledWith({
      username: "user1",
      password: expect.any(String),
    });
  });
  test("create password.enc.txt", async () => {
    await makepassword(passwordFileName, passwordEncFileName);
    expect(fs.existsSync(passwordEncFileName)).toBe(true);
  });
  test("validate file format", async () => {
    fs.writeFileSync(
      passwordFileName,
      "invalid\nutestUser@test.com:password\n"
    );
    await expect(
      makepassword(passwordFileName, passwordEncFileName)
    ).resolves.not.toThrow();
    fs.writeFileSync(passwordFileName, "testUser@test.com:password\n");
  });
  test("check if file not exist", async () => {
    const notExistFile = "test.txt";
    await expect(
      makepassword(notExistFile, passwordEncFileName)
    ).resolves.not.toThrow();
  });
});
