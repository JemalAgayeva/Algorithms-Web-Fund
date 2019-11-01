/* 
  Array: Push Front

  Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
*/

// starting from the back and moving every element to the right by 1 removes the need to have a temp var for the value that is being overwritten
function pushFront(arr, val) {
  
  for (let i = arr.length - 1; i >= 0 ; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = val;
  return arr;
}
module.exports = pushFront;