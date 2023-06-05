// Assignment Code
var generateBtn = document.querySelector("#generate");

// console.log is used to display something and can also be used for testing and checking if the things are working correctly

// Write password to the #password input
// this function runs whenever the generate password button is clicked
function writePassword() {
  // var password = generatePassword();
  // selecting the textarea
  var passwordText = document.querySelector("#password");

  // Taking the length of the password
  var length = prompt("Enter the length of the password:");
  length = Number(length); // converting string to a number
  // while loop allows us to do repitive tasks
  while (length < 8 || length > 128) {
    length = prompt("Enter the length of the password again:");
    length = Number(length);
  }

  // Asking for uppercase letters
  var includeUppercase = confirm("Want to include uppercase letters?");

  // Asking for lowercase letters
  var includeLowercase = confirm("Want to include lowercase letters?");

  // Asking for numeric letters
  var includeNumeric = confirm("Want to include numeric letters?");

  // Asking for special letters ($, #-*/)
  var includeSpecial = confirm("Want to include special letters?");

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "$#*!@&?";

  var validChars = "";

  var password = "";

  if (includeLowercase == true) {
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    validChars += lowercase;
  }

  if (includeUppercase == true) {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    validChars += uppercase;
  }

  if (includeNumeric == true) {
    password += numeric[Math.floor(Math.random() * numeric.length)];
    validChars += numeric;
  }

  if (includeSpecial == true) {
    password += special[Math.floor(Math.random() * special.length)];
    validChars += special;
  }

  for (var i = password.length + 1; i <= length; i++) {
    password += validChars[Math.floor(Math.random() * validChars.length)];
  }

  passwordText.value = password;
  // console.log(password);

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
