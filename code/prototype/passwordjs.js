const { makepassword } = require("../src/makepassword");

async function passwordjs() {
  if (process.argv.length != 5) return false;

  const filename = process.argv[2];
  const email = process.argv[3];
  const password = process.argv[4];
}

if (require.main === module) {
  passwordjs();
}

module.exports = passwordjs;
