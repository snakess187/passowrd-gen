var generateBtn = document.querySelector("#generate");

const myArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
];

function generatePassword() {
  var passwordLength = parseInt(prompt("How long should the password be? (Enter a number between 8 and 128)"));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Please enter a number between 8 and 128."));
  }
  
  var includeUppercase = confirm("Would you like the password to have uppercase letters?");
  var includeNumbers = confirm("Should the password include numbers?");
  var includeSymbols = confirm("Should the password include symbols?");
  
  var password = "";
  var characters = myArray.filter(function(char) {
    switch (true) {
      case !includeUppercase && /[A-Z]/.test(char):
        return false;
      case !includeNumbers && /[0-9]/.test(char):
        return false;
      case !includeSymbols && /[\W_]/.test(char):
        return false;
      default:
        return true;
    }
  });
  for (var i = 0; i < passwordLength; i++){
    const ran = Math.floor(Math.random() * characters.length);
    password += characters[ran];
  }
  
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
