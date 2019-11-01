/* 
  add new val to back of arr without using .push
*/

function push(arr, val) {
  arr[arr.length] = val;
  return arr;
}