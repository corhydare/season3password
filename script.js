// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passLower = "abcdefghijklmnopqrstuvwxyz";
var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passNumber = "0123456789";
var passSymb = "!@#$%^&*_-+=";
// var password = generatePassword();

function writePassword() {
  var passLength = window.prompt(
    "Password Length:",
    "Numbers only, between 8 and 128"
  );

  if (passLength == NaN) {
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

  var passLower = window.prompt("next");

  passLower = passLower.toUpperCase();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
