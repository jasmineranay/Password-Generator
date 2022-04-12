//Choosing the amonunt of characters, 8 was the minimum characters

var characterLength = 8;
var choiceArr = [];

// Identify all possible variables
var Uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','-','=','+'];
var Numberschars = ['0','1','2','3','4','5','6','7','8','9',];

  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // Write password to the #password input
  function writePassword() {
      var correctPrompts =  getPrompts();  // if true or false
      var passwordText = document.querySelector("#password");
    
    if(correctPrompts){
      var Newpassword = generatePassword();
      passwordText.value = Newpassword;
    } else {
        passwordText.value = "";

    }
  
 function generatePassword() {
   //prompts need to be activated in order to generatePassword
   var password = '';
   for(var i = 0; i < characterLength; i++){
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
   }
   return password;

 }
   
//created a window that asks the user how many characters do you want your password to have
function getPrompts(){
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));
//using if statements for all possibilities for length of password

//using If statements to ask user if they want lowercase,uppercase,numbers, and/or special characters
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 characters. Please try again.")
    return false;
  }
  
  if (confirm("Would you like lowercase characters in your password?")) {
    choiceArr = choiceArr.concat(Lowercase);

  }
  if (confirm("Would you like uppercase characters in your password?")) {
    choiceArr = choiceArr.concat(Uppercase);
  
  }

  if (confirm("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialChar);

  }

  if (confirm("Would you like number characters in your password?")) {
    choiceArr = choiceArr.concat(Numberschars); 
}
return true;

}
 }

