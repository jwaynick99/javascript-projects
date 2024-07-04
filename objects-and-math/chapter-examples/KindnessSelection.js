function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 3; i++){
//    console.log(randomSelection(happiness));
//    console.log(randomSelection(words))
//  }


function randomArray(array1, array2) {
    let arrays = [array1, array2];
    let selectedArray = arrays[Math.floor(Math.random() * arrays.length)];
    return selectedArray;
 }
function printTwoFromArray() {
    randomArray = randomArray(happiness, words)
    for (i = 0; i<2; i++){
      console.log(randomSelection(randomArray))
    }
}
function printOneFromEach (array1, array2) {
  let newArray = []
  newArray.push(randomSelection(array1), randomSelection(array2))
  console.log(newArray)
}
printTwoFromArray()
printOneFromEach(happiness, words)
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.