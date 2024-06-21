let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",")
equipment = equipment.split(",")
pets = pets.split(",")
sleepAids = sleepAids.split(",")
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids]
console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let input = require('readline-sync')
let userInput = input.question("Select a cabinet 1-4: ")
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (Number(userInput) <= 4 && Number(userInput) >= 1) {
    console.log(`This cabinet contains : ${cargoHold[userInput - 1]}`)
} else {
    console.log(`Sorry, ${userInput} is not a cabinet number`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userInputCab = input.question("Choose a cabinet 1-4: ")
let userInputItem = input.question("Enter the item you would like to search for in this cabinet: ")
if (cargoHold[userInputCab - 1].includes(userInputItem)) { 
    console.log(`Cabinet ${userInputCab} does contain ${userInputItem}!`)
} else {
    `Cabinet ${userInputCab} does not contain ${userInputItem}.`
}
