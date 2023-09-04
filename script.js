// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordArr = [];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const upperCaseAlphebet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCaseAlphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const specialCharacters = '!#$%&*+-.<=>?^_{|}~'.split('');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = prompt('Enter length of password you want, Must be more then 8 characters and less then 128')
  if (passwordLength > 128 || passwordLength < 8) {
    alert('Your password is the wrong amount of Characters!');
    return (False);
  }

  let chooseNumbers = confirm('Would you like to use numbers in you password?');
  let chooseUpperCaseLetters = confirm('Would you like to use uppercase letters in you password?');
  let chooseLowerCaseLetters = confirm('Would you like to use lowercase letters in you password?');
  let chooseSpecialCharacters = confirm('Would you like to use special characters in you password?');

  if (chooseNumbers === false && chooseLowerCaseLetters === false && chooseUpperCaseLetters === false && chooseSpecialCharacters === false) {
    alert('You must select a parameter!')
  }

  var newPassWordArr = [];

  if (chooseNumbers === true) {
    newPassWordArr = newPassWordArr.concat(numbers);
  }
  if (chooseUpperCaseLetters === true) {
    newPassWordArr = newPassWordArr.concat(upperCaseAlphebet);
  }
  if (chooseLowerCaseLetters === true) {
    newPassWordArr = newPassWordArr.concat(lowerCaseAlphebet);
  }
  if (chooseSpecialCharacters === true) {
    newPassWordArr = newPassWordArr.concat(specialCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = (Math.floor(Math.random() * newPassWordArr.length));
    passwordArr += newPassWordArr[randomIndex];
  }
  return passwordArr;
}