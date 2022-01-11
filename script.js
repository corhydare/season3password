// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passNumber = "0123456789";
var passSymb = "!@#$%^&*_-+=";
// var password = generatePassword();

function writePassword() {
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
  // lowercase characters solution without prompt. Prompt invites unnecesary complexity and opions. People are almost always happier with less choices.
  var passLower = confirm("Use lowercase characters?");
  if (passLower) {
    var passLower = "abcdefghijklmnopqrstuvwxyz";
  } else {
    // notification in case it isn't clear what cancel does, includes blank value for lower variable.
    var passLower = "";
    var lowSign = "lowercase characters will NOT be used..";
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = lowSign;
  document.getElementById("password").style.color = "orange";
  console.log(lowSign);

  // solution to UPPERCASE characters, instead of using if x=y or yes, and filtering other choices
  var passUpper = confirm("Use UPPERCASE characters?");
  if (passUpper) {
    var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    // notification in case it isn't clear what cancel does
    var passUpper = "";
    var hiSign = "UPPERCASE characters will NOT be used..";
  }
  console.log(hiSign);

  // passLower = passLower.toUpperCase();

  var passwordText = document.querySelector("#password");
  passwordText.value = passUpper;
  document.getElementById("password").style.color = "orange";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
