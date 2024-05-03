"use strict";
const { createHash } = require("crypto");
const fs = require("fs");
const { readFile, writeFile, hash } = require("../util/utility.js");

describe("readFile function", () => {
  const fileName = "./testFile.txt";
  const fileContent = "text";

  beforeAll(() => {
    fs.writeFileSync(fileName, fileContent);
  });

  afterAll(() => {
    fs.unlinkSync(fileName);
  });

  test("show if file contains texts ", () => {
    const content = readFile(fileName);
    expect(content).toEqual(["text"]);
  });

  test("check if file exists", () => {
    expect(() => readFile("./dummy.txt")).toThrow();
  });
});

describe("check writeFile()", () => {
  const fileName = "./test.txt";
  const content = ["A", "B"];

  afterAll(() => {
    fs.unlinkSync(fileName);
  });

  test("check if contains content", () => {
    writeFile(content, fileName);
    const fileContent = fs.readFileSync(fileName, "utf-8");
    expect(fileContent.trim()).toEqual(content.join("\n"));
  });
});

describe("hash()", () => {
  test("check if password hashed", () => {
    const input = "thisispassWord";
    const expectedHash = createHash("sha256").update(input).digest("hex");
    expect(hash(input)).toEqual(expectedHash);
  });
});
