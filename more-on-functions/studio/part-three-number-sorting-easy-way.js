//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

//Sort each array in ascending order.
function sortArrayAscending(numbersArray){
    let sortedarray = [];
    let minValue = findMinValue(numbersArray);
    let arrayLength = numbersArray.length;
    for (let i = 0; i < arrayLength; i++){
      sortedarray.push(numbersArray[numbersArray.indexOf(minValue)]);
      numbersArray.splice(numbersArray.indexOf(minValue), 1)
      minValue = findMinValue(numbersArray);
    }
    return sortedarray;
  }

//Sort each array in decending order.
function sortArrayDescending(numbersArray){
    let sortedarray = [];
    let minValue = findMinValue(numbersArray);
    let arrayLength = numbersArray.length;
    for (let i = 0; i < arrayLength; i++){
      sortedarray.unshift(numbersArray[numbersArray.indexOf(minValue)]);
      numbersArray.splice(numbersArray.indexOf(minValue), 1)
      minValue = findMinValue(numbersArray);
    }
    return sortedarray;
  }
  console.log(sortArrayAscending(nums2));
  console.log(sortArrayDescending(nums1));