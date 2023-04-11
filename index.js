function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the beginning to the middle
  //racecar 7/2===3.5
  //aaaa 6/3===3
  for(let i=0; i<word.length /2 ;i++){
  //check if any letter to the corresponding letter from the end
  const j=word.length-1-i
  const startChar=word[i]
  const endChar=word[j] 
  if(startChar !==endChar){
    return false;
  }
} 
return true;
//if any letter don't match,return false
}
//isPalindrome("mom")

/* 
r a c e c a r
0 1 2 3 4 5 6
i           j
r a c e c a r
0 1 2 3 4 5 6
  i       j
r a c e c a r
0 1 2 3 4 5 6
     i  j
r a c e c a r
0 1 2 3 4 5 6
      ij    
     That means if the 1st letter is same as the last letter,and second
 is same as the second last etc. until we reach the middle return true
 iterate from the beginning to the middle letter from the end
if any aletter dont match return false.

return true
  Add your pseudocode here
*/

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
