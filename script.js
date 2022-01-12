// Assignment Code
var generateBtn = document.querySelector("#generate");
// global variable
var passLength = 0;

// because browsers are single thread solvers, the HTML cannot be updated until the code has finished.
// even when broken into separate functions chrome waits until the entire script finishes?
// I must be doing something wrong...

function askLength() {
  // password length is restricted to only numbers and cannot be too short or too long
  var passLength = window.prompt(
    "Password Length:",
    "Numbers only, between 8 and 128"
  );
  if (isNaN(passLength)) {
    alert("Invalid length. Defaulting to 8...");
    var passLength = 8;
  } else if (passLength < 8) {
    alert("Too short. Defaulting to 8...");
    var passLength = 8;
  } else if (passLength > 128) {
    alert("Too long. Defaulting to 128...");
    var passLength = 128;
  }
  if (!passLength) {
    return;
  }
  const validation = document.getElementById("validation");
  validation.innerHTML = passLength + " character password will be generated.";
  document.getElementById("validation").style.color = "orange";
  console.log(passLength + " character password will be generated.");
  return;
}
generateBtn.addEventListener("click", askLength);

// gloablizing the variable
var passLower = "";
var lowSign;
function askLow() {
  // lowercase characters solution without prompt. Prompt invites unnecesary complexity and opions. People are almost always happier with less choices.
  var passLower = window.prompt(
    "Use lowercase characters? Y/N",
    "Any other answer will result in no."
  );
  if (passLower == "Y") {
    var passLower = "abcdefghijklmnopqrstuvwxyz";
    var lowSign = "lowercase characters will be included.";
  } else {
    // notification in case it isn't clear what cancel does, includes blank value for lower variable.
    var passLower = "";
    var lowSign = "lowercase characters will NOT be used.";
  }
  const validation = document.getElementById("validation");
  validation.innerHTML = lowSign;
  document.getElementById("validation").style.color = "orange";
  console.log(lowSign);
  return;
}
generateBtn.addEventListener("click", askLow);
// gloablizing the variable
var passUpper = "";
var hiSign;
function askHi() {
  // solution to UPPERCASE characters, instead of using if x=y or yes, and filtering other choices
  var passUpper = window.prompt(
    "Use UPPERCASE characters? Y/N",
    "Any other answer will result in no."
  );
  if (passUpper == "Y") {
    var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hiSign = "UPPERCASE characters will be included.";
  } else {
    // notification in case it isn't clear what cancel does
    var passUpper = "";
    var hiSign = "UPPERCASE characters will NOT be used..";
  }
  const validation = document.getElementById("validation");
  validation.innerHTML = hiSign;
  document.getElementById("validation").style.color = "orange";
  console.log(hiSign);
  return;
}
generateBtn.addEventListener("click", askHi);
// gloablizing the variable
var passNumber = "";
var numSign;
function askNum() {
  // numeric characters solution
  var passNumber = confirm("Use numeric characters?");
  if (passNumber) {
    var passNumber = "0123456789";
    var numSign = "Numeric characters will be included.";
  } else {
    // notification in case it isn't clear what cancel does
    var passNumber = "";
    var numSign = "Numeric characters will not be used..";
  }
  const validation = document.getElementById("validation");
  validation.innerHTML = numSign;
  document.getElementById("validation").style.color = "orange";
  console.log(numSign);
  return;
}
generateBtn.addEventListener("click", askNum);
// gloablizing the variable
var passSymb = "";
var symSign;
function askSym() {
  // special characters question
  var passSymb = confirm("Use special characters?");
  if (passSymb) {
    var passSymb = "!@#$%^&*_-+=";
    var symSign = "Special characters will be included.";
  } else {
    // notification in case it isn't clear what cancel does
    var passSymb = "";
    var symSign = "Special characters will not be used..";
    // validation
  }
  const validation = document.getElementById("validation");
  validation.innerHTML = symSign;
  document.getElementById("validation").style.color = "orange";
  console.log(symSign);
  return;
}
generateBtn.addEventListener("click", askSym);

function writePassword() {
  var password = "";
  // Combine all of the selected characters
  var alpha = passLower.concat(passUpper, passSymb, passNumber);

  for (var i = 0; i <= passLength; i++) {
    var shuffle = Math.floor(Math.random() * alpha.length);
    password += alpha.substring(shuffle, shuffle + 1);
  }

  var passwordText = document.querySelector("#password");
  // cut extra character from the string
  passwordText.value = password.substring(0, passLength);
  document.getElementById("password").style.color = "black";
  return;
}

generateBtn.addEventListener("click", writePassword);
