// Assignment Code
var generateBtn = document.querySelector("#generate");


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const upperCaseAlphebet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCaseAlphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const specialCharacters = '!#$%&*+-.<=>?^_{|}~'.split('');





function generatePassword() {
  for (i = 8; i <= 128; i++) {

  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.onclick = function () {
  alert('Would You Like To use lowercase Letters?');
  
};
