"use strict";
const fs = require("fs");
const { readFile, writeFile, hash } = require("../util/utility");
const User = require("../models/Users");

async function makepassword(passwordFileName, passwordEncFileName) {
  const credentials = readFile(passwordFileName);
  const encryptedCredentials = [];

  for (const line of credentials) {
    const [username, password] = line.split(":");
    if (!username || !password) {
      continue;
    }
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    const hashedPassword = hash(trimmedPassword);

    const encryptedCredential = `${trimmedUsername}:${hashedPassword}`;
    encryptedCredentials.push(encryptedCredential);

    writeFile(encryptedCredentials, passwordEncFileName);

    // upload to MongoDB
    await User.create({
      username: trimmedUsername,
      password: hashedPassword,
    });
  }
}

if (require.main === module) {
  makepassword("../data/password.txt", "../data/password.enc.txt");
}

module.exports = { makepassword };
