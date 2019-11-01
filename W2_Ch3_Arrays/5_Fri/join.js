/* 
  Given an arr and a separator, output a string of every item in the array separated by the separator.
  The separator should only be between two elements.
  
  join([1, 2, 3], ", ") => "1, 2, 3"
*/

function join(arr, separator = ", ") {

  let joined = "";
  if (!arr.length) return joined;

  // less than arr.length - 1 to stop before last
  for (let i = 0; i < arr.length - 1; i++) {
    joined += arr[i] + separator;
  }
  return joined + arr[arr.length - 1];
}

// concatenate separator first to avoid trailing separator
function join2(arr, separator = ", ") {

  let joined = "";
  if (!arr.length) return joined;

  joined += arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    joined += separator + arr[i];
  }
  return joined;
}
