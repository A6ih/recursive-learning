function merge(arrayOne, arrayTwo) {
  const arr = [];
  while (arrayOne.length > 0 || arrayTwo.length > 0) {
    if (arrayOne.length === 0) {
      arrayTwo.forEach((item) => arr.push(item));
      return arr;
    } else if (arrayTwo.length === 0) {
      arrayOne.forEach((item) => arr.push(item));
      return arr;
    }
    if (arrayOne[0] <= arrayTwo[0]) {
      arr.push(arrayOne[0]);
      arrayOne.shift();
    } else if (arrayTwo[0] <= arrayOne[0]) {
      arr.push(arrayTwo[0]);
      arrayTwo.shift();
    }
  }
  return arr;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  const mid = Math.ceil(array.length / 2);
  const arrOne = mergeSort(array.slice(0, mid));
  const arrTwo = mergeSort(array.slice(mid, array.length));
  return merge(arrOne, arrTwo);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))