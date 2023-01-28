function isPalindrome(word) {
  // Write your algorithm here 
 // data being taken in is a string
 // need to use an if else statement for returning boolean of true or false
 // take first half of string and compare it to second half... convert to an array?

 const array = word.split('');
 const reverseArray = array.reverse();
 const reverseString = reverseArray.join('');

 if(word === reverseString) {
  return true
  console.log('It is a palindrome!');
 }
 else {
  return false
  console.log('It is not a palindrome!')
 }

}

/* 
  Add your pseudocode here
*/ // Take in a string
  // Convert the string to an array
  // Compare the array to the reverse of the array
  // If array === reverseArray return true
  // else return false

/*
  Add written explanation of your solution here
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
