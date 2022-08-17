// function slugify(title) {
//     let slug;

//     slug = title.toLowerCase();
//     console.log(slug);
//     slug = slug.split(" ");
//     console.log(slug);
//     slug = slug.join("-");
//     console.log(slug);
//     return slug;
// }

// slugify("This is MASSIVE");

//////////////////////////////////////////


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray);
//     // console.log(newArray);
//     // newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength);
//     } else
//         return newArray;
// }
  
// makeArray (["Mango", "Poly"], ["Ajax", "Chelsea"], 3)

//////////////////////////////////////////
// function calculateTotal(number) {
//  // Change code below this line
//     let sumNumber = 0;
//     for (i = 1; i <= number; i += 1) {
//         sumNumber = i + sumNumber;
//         console.log("сума", sumNumber)
//     }
//     return sumNumber;


//   // Change code above this line
// }

// calculateTotal(7);

//////////////////////////////////////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (i = 0; i < order.length; i += 1) {
//         // console.log(order[i]);
//         total = total + order[i];
//         // console.log(total);
//     }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

/////////////////////////////////////////////////////////

// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(" ");
//   // console.log(words);
//   let longword = words[0];
//   // console.log(longword);
//   for (const word of words) {
//     if( word.length > longword.length) {
//       longword = word;
//       console.log(longword);
//     }
//   }
//   console.log("найдовше", longword);
//   return longword;
  
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

///////////////////////////////////////////////////////////

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   // numbers.push(min);
//   for ( let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     // console.log(numbers);
//   }
//     // console.log(numbers);
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(29, 34);

/////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // console.log(newArray);
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)

// /////////////////////////////////////////////////////////

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const number = [];
//   const arrays = array1.concat(array2);

//   for (let array of arrays) {
//     if (array1.includes(array) && array2.includes(array))
//       number.push(array);
//   }
//   number.splice(number.length / 2, number.length / 2);
//   console.log(number);
//   return number;
//  // Change code above this line
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
