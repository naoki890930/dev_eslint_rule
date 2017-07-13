"use strict";

const rule = require("../rules/if-newline");

const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [{
  code: `if (a) {
    console.log(a);
  };`
}];

const invalid = [{
  code: "if (a) { console.log(a); };",
  errors: [{ message: "You must make a new line when use if statement.", type: "IfStatement" }]
}];

// 単体テスト実行
ruleTester.run("if-newline", rule, { valid, invalid });

