const { execSync } = require("child_process");

function executeCommand(command) {
  try {
    execSync(command, { stdio: "inherit" });
    return true;
  } catch (error) {
    return false;
  }
}

describe("Acceptance Tests", () => {
  test("return true if credentials are valid true", () => {
    expect(
      executeCommand(
        "node ../src/passwordjs.js ../data/password.enc.txt tong@nku.edu p4ssword"
      )
    ).toBe(true);
    expect(
      executeCommand(
        "node ../src/passwordjs.js ../data/password.enc.txt user1 password1"
      )
    ).toBe(true);
    expect(
      executeCommand(
        "node ../src/passwordjs.js ../data/password.enc.txt user2 password2"
      )
    ).toBe(true);
  });
});
