/* 
  Array: Pop Front

  Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop() .
*/

function popFront(arr) {
<<<<<<< Updated upstream

  const popped = arr[0];
  
=======
  conts first = arr[0];
>>>>>>> Stashed changes
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr.length = arr.length - 1; // cut off 'empty' value at the end
<<<<<<< Updated upstream
  return popped;
}
=======
  return first;
}
>>>>>>> Stashed changes
