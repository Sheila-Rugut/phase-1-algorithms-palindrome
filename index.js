//prompt user to enter a word
const word= ('Enter a word');
function isPalindrome(word) {
  // Write your algorithm here
  const string=word.toLowerCase();
  // convert word to an array
  const arrayValues = string.split('');
  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();
  // convert array to word
  const reverseWord = reverseArrayValues.join('');
  if (reverseWord===string){
    return true;
  }
  else {
    return false;
}  
}
isPalindrome(word);

/* 
  Add your pseudocode here
//create function palindrome
//when user enters a word convert to lowercase
    // if word is a palindrome
    //return true 
    //else return false*/

/*
  Add written explanation of your solution here
  The program prompts user to enter a word
  The program converts word to lowercase then converts it to an array
  Using reverse method reverses the position of each character in an array
  It then converts it back to a string using join
  Using an if statement checks whether the string entered is equal to the reversed word
  It prints out true if it equal and false if it is not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
