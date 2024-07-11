function randomFromArray(arr){
  let randomSelection = Math.floor(Math.random() * arr.length)
  return arr[randomSelection]
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;
