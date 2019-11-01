/* 
  Array: Remove At

  Given array and an index, remove and return the array value at that index. Do this without using built-in array methods except pop().
*/

function removeAt(arr, idx) {
  
  let removed = arr[idx];
  
  for (let i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
  }

  // when the loop is done the 2nd to last item is set to the last item
  // so there is a duplicate that needs to be removed
  arr.pop();
  return removed;
}

module.exports = removeAt;