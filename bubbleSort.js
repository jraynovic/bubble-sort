
//demonstrate bubble sort
function bubbleSort(array) {
  array.forEach(() => { // loop through the array array.length times
    array.forEach((ele, index) => {  // loop through array again O(n2)
      if (array[index] > array[index + 1]) {  //if val on left is larger
        [array[index], array[index + 1]] = [array[index + 1], array[index]]; // swap values
      }
    });
  });
  return array;
}

let unsortedArray = [4, 3, 2, 1];
console.log(bubbleSort(unsortedArray));
