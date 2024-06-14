// Declare and assign the variables below
let nameOfTheSpaceShuttle = "Determination";
let shuttleSpeed = 17500; //miles
let distanceToMars = 225000000; //km
let distanceToTheMoon =  384400; //km
const milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheSpaceShuttle)
console.log(typeof shuttleSpeed)
console.log(typeof distanceToMars)
console.log(typeof distanceToTheMoon)
console.log(typeof milesPerKilometer)
// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKilometer
let hoursToMars = milesToMars / shuttleSpeed
console.log(hoursToMars)
let daysToMars = hoursToMars /24
// Print the results of the space mission calculations below
console.log(nameOfTheSpaceShuttle + " will take " + daysToMars + " days to reach Mars")
// Calculate a trip to the moon below
let milesToTheMoon = distanceToTheMoon * milesPerKilometer
let hoursToTheMoon = milesToTheMoon / shuttleSpeed
let daysToTheMoon = hoursToTheMoon / 24
// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle + " will take " + daysToTheMoon + " days to reach the Moon")