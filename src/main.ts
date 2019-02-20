
// Non-literal require - tsr-detect-non-literal-require
var lib: String = 'fs'
require(lib)

// Eval with variable - tsr-detect-eval-with-expression
var myeval: String = 'console.log("Hello.");';
eval(myeval);

// Unsafe Regexp - tsr-detect-unsafe-regexp
const regex: RegExp = /(x+x+)+y/;

// Non-literal Regexp - tsr-detect-non-literal-regexp
var myregexpText: String = "/(x+x+)+y/";
var myregexp: RegExp = new RegExp(myregexpText);
myregexp.test("(x+x+)+y");

// Markup escaping disabled - tsr-detect-disable-mustache-escape
var template: Object = new Object;
template.escapeMarkup = false;

// Detects HTML injections - tsr-detect-html-injection
var element: Element =  document.getElementById("mydiv");
var content: String = "mycontent"
Element.innerHTML = content;

// Timing attack - tsr-detect-possible-timing-attacks
var userInput: String = "Jane";
var auth: String = "Jane";
if (userInput == auth) {
  console.log(userInput);
}
