/**
 * @param {string} s
 * @return {boolean}
 */


// STRATEGY
// Iterate over possible substring sizes (i). Longest possible repeating substring is half of string, smallest is single char
  // For each i, save first i chars as your potential repeating substring (target substring; will compare all other substrings to this)
  // Get all subsequent substrings of size i and compare to target substring
  // Create an index pointer that will visit multiples of i 
  // Slice string from index ptr to index ptr + i and compare to target
  // Add i to pointer in each while loop iteration until end of string is reached
  // If a nonmatching substring is encountered, substring of size i is not valid, so break (move onto next size)
  // If index pointer reaches string length, repeating substring has been found.

// PSEUDOCODE
// iterate from len/2 to 1
  // substring = slice string from 0 to i
  // current index = i
  // loop while curr idx < len
    // get substring from currindex to currindex + i (substr len)
      // if substring doesn't match target, break
    // add substr len i to curr idx
  // if curr idx === len, return true
  
  
const repeatedSubstringPattern = function(s) {
  if (s.length === 1) {
    return false;
  }

  let target = '';
  let currIdx = 0;
  let currSubstr = '';
  const length = s.length;
  
  for (let i = Math.floor(length / 2); i > 0; i--) {
    target = s.slice(0, i);
    currIdx = i;
    
    while (currIdx < length) {
      currSubstr = s.slice(currIdx, currIdx + i);
      
      if (currSubstr !== target) {
        break;
      }
      
      currIdx += i;
    }
    
    if (currIdx === length) {
      return true;
    }
  }
  
  return false;
};
