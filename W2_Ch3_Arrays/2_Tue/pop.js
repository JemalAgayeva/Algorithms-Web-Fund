/* 
  Recreate the pop method without using .pop()
*/

function pop(arr) {
  const popped = arr[arr.length - 1];
  arr.length = arr.length -1;
  return popped;
}