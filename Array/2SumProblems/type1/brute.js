function twoSumPresent(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === t) {
        console.log(arr[i], arr[j], "arr[i] arr[j]");
        return true;
      }
    }
  }
  return false;
}

console.log(twoSumPresent([2, 5, 1, 4], 1));
