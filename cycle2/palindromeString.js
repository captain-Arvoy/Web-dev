function checkPalindrome(str){
  let strRev = str.split('').reverse().join("");
  /* explanation
   step 1: .split('')- seperates all the letters of the string and returns as array;
   step 2: .reverse() - reverses the array of letters that split('') has returned
   step 3: .join() - after reversing the array it joins back all the elements/letters
                     back to the string
   example: "hello"
   step 1: ['h','e','l','l','o']
   step 2: ['o','l','l','e','h']
   step 3: "olleh"
  */

  return strRev;
}
let str = prompt("Enter a String: ")
str = str.toLowerCase()
if (checkPalindrome(str) === str){
  document.body.textContent = "The string is palindrome"
} else {
  document.body.textContent = "The string is not palindrome" 
}
