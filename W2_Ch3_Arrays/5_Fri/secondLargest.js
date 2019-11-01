/* 
Array: Second-Largest

Return the second-largest element of an array. Given [42,1,4,Math.PI,7] , return 7 . If the array is too short, return null .
*/

function secondLargest(arr) {
  if (arr.length < 2) return null;
  
  let max = arr[0];
  let secondLargest = arr[0];

  for (const num of arr) {
    if (num > max) {
      secondLargest = max; // second largest equals old max
      max = num;
    }
  }

  // all dupes
  if (max === secondLargest) return null 
  return secondLargest;
}

function secondLargest2(arr) {

  if (arr.length < 2) return null;
  
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  // all dupes
  if (largest === secondLargest)
    return null
  
  return secondLargest;
}