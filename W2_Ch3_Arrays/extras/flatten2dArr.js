/*
  Input:
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]

  Output:
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

function flatten2dArr(arr2d) {

  const flattened = [];

  for (let i = 0; i < arr2d.length; ++i) {
    const innerArr = arr2d[i];

    for (let j = 0; j < innerArr.length; ++j) {
      flattened.push(innerArr[j]);
    }
  }
  return flattened;
}