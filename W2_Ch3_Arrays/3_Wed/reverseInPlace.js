/* 
  Array: Reverse

  Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given . As always, do not use built-in array functions such as splice() .
*/

/* 
  using Math.floor prevents odd length arrays from swapping the middle element with itself, saving 1 iteration
*/

function reverseArr(arr) {

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {

    let swapEl = arr[i],
      swapIdx = arr.length - 1 - i;

    arr[i] = arr[swapIdx];
    arr[swapIdx] = swapEl;
  }
  return arr;
}

// destructure array syntax, similar to py syntax for swapping
function revArr(arr) {
  
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}