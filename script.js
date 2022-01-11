// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// var password = generatePassword();

function writePassword() {
  var passwordText = document.querySelector("#password");
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

  // numeric characters solution
  var passNumber = confirm("Use numeric characters?");
  if (passNumber) {
    var passNumber = "0123456789";
  } else {
    // notification in case it isn't clear what cancel does
    var passNumber = "";
    var numSign = "Numeric characters will not be used..";
  }
  console.log(numSign);

  // special characters question
  var passSymb = confirm("Use special characters?");
  if (passSymb) {
    var passSymb = "!@#$%^&*_-+=";
  } else {
    // notification in case it isn't clear what cancel does
    var passSymb = "";
    var symSign = "Special characters will not be used..";
  }
  console.log(symSign);

  // passLower = passLower.toUpperCase();

  var passwordText = document.querySelector("#password");
  passwordText.value = passSymb;
  document.getElementById("password").style.color = "orange";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
