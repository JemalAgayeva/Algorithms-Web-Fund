/* 
  Array: Min to Front

  Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
*/

const removeAt = require("./removeAt");
const pushFront = require("../day1/pushFront");

function minToFront(arr) {
  
  let idxOfMin;
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idxOfMin = i;
    }
  }

  pushFront(arr, removeAt(arr, idxOfMin))
  return arr;
}
