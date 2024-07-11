// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(numbersArray) {
  return numbersArray[Math.floor(Math.random()*numbersArray.length)];
}

const selectedNums = [];

while (selectedNums.length < 3){
  let randEntry = selectRandomEntry(idNumbers)
  if (!selectedNums.includes(randEntry)) {
    selectedNums.push(randEntry);
  }
}
console.log(selectedNums)
// Code your buildCrewArray function here:
let selectedCrew = [];
function buildCrewArray(selectedIDs, crewArray) {

  for (let i = 0; i < 3; i++) {
    for (let j in crewArray) {
      if (crewArray[j].astronautID == selectedIDs[i]){
        selectedCrew.push(crewArray[j]);
      }
    }
  }
  return selectedCrew;
}


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
buildCrewArray(idNumbers, animals)
// Code your template literal and console.log statements:
console.log(`${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`)
