
// const lengthOfSubstring = (str) => {
//
//   let length = 0;
//   let longest = 0;
//   let chars = {};
//
//   for (let i=0; i < str.length; i++){
//     if (chars[str[i]]){
//       if (length > longest){
//         longest = length;
//       }
//       chars = {};
//       chars[str[i]] = true;
//       length = 1;
//     } else {
//       length++
//       chars[str[i]] = true;
//       if (length > longest){
//         longest = length;
//       }
//     }
//   }
//   console.log({length});
//   return longest;
// }

const lengthOfSubstring = (str) => {
  let longest = 0;
  let currLength = 0;
  let start = 0;
  let end = 0;
  let chars = {};

  while (start < str.length) {
    chars[str[start]] = true;
    currLength++;
    end = start + 1;
    // console.log(str[start]);

    while (end < str.length){
      // console.log(str[end]);
      console.log(chars);
      console.log(currLength);
      if (chars[str[end]]){
        if (currLength > longest){
          longest = currLength;
        }
        currLength = 0;
        chars = {};
        break;
      } else {
        currLength++;
        chars[str[end]] = true;
        end++;
        if (currLength > longest){
          longest = currLength;
        }
      }
    }
    if (currLength > longest){
      longest = currLength;
    }
    start++
    currLength = 0;
  }
  return longest;
}

// console.log(lengthOfSubstring("abcabcbb"));
// console.log(lengthOfSubstring("bbbbb"));
// console.log(lengthOfSubstring("pwwkew"));
console.log(lengthOfSubstring("dvdf"));
console.log(lengthOfSubstring(" "));
