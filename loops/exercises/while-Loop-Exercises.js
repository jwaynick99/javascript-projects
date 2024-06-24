//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel;
let numOfAstronauts;
let shuttleAltitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
let input = require('readline-sync');
startingFuel = input.question("Enter the fuel level in digits: ");
startingFuel = Number(startingFuel)
while (startingFuel < 5000 || startingFuel > 30000) {
  startingFuel = input.question("Invalid Amount - Enter the fuel level in digits: ");
  startingFuel = Number(startingFuel)
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numOfAstronauts = Number(input.question("How many astronauts onboard: "));
while (numOfAstronauts < 1 || numOfAstronauts > 7) {
  if (numOfAstronauts > 7) {
    numOfAstronauts = input.question("Too many aboard, lose some and re-enter count here: ");
  } else if (numOfAstronauts < 1) {
    numOfAstronauts = input.question("You expect this shuttle to run itself? Find a crew and re-enter the count here: ");
  }
  numOfAstronauts = Number(numOfAstronauts);
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel > 100 * numOfAstronauts) {
  startingFuel -= 100 * numOfAstronauts;
  shuttleAltitude += 50;
  console.log(startingFuel)
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (shuttleAltitude >= 2000) {
  console.log(`The shuttle gained an altitude of ${shuttleAltitude} km. Orbit achieved!`)
} else {
  console.log(`The shuttle gained an altitude of ${shuttleAltitude} km. Failed to reach orbit.`)
}