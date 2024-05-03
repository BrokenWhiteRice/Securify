const { makepassword } = require("./makepassword");
const login = require("./login");

async function passwordjs() {
  if (process.argv.length != 5) return false;

  const filename = process.argv[2];
  const email = process.argv[3];
  const password = process.argv[4];

  try {
    const isValid = await login(filename, email, password);
    if (!isValid) {
      console.log("False");
      return false;
    }

    await makepassword(filename, "../data/password.enc.txt");

    console.log("true");
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

if (require.main === module) {
  passwordjs();
}

module.exports = passwordjs;
