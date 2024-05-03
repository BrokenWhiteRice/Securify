const { readFile } = require("../util/utility");

async function login(passwordFileName, username, password) {
  if (!password) {
    return false;
  }

  try {
    const credentials = readFile(passwordFileName);
    for (const credential of credentials) {
      const [savedUsername, savedPassword] = credential.split(":");
      if (
        savedUsername.trim() === username.trim() &&
        savedPassword.trim() === password.trim()
      ) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error reading password file: ${error}`);
    return false;
  }
}

module.exports = login;
