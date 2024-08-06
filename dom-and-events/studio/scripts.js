// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
  let takeOff = document.getElementById("takeoff");
  let flightStatus = document.getElementById("flightStatus");
  let flightScreen = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");
  let abort = document.getElementById("missionAbort");
  let land = document.getElementById("landing");
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let rocket = document.getElementById("rocket");

  takeOff.addEventListener("click", function () {
    console.log("Take Off button clicked");
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
      flightStatus.innerHTML = "Shuttle in flight.";
      flightScreen.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = 10000;
    }
  });
  land.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed";
    flightScreen.style.backgroundColor = "green";
    shuttleHeight = 0;
  });
  abort.addEventListener("click", () => {
    if (window.confirm("Confirm that you want to abort the mission.")) {
      flightStatus.innerHTML = "Mission aborted.";
      flightScreen.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
    }
  });
  let moveY = 10;
  up.addEventListener("click", () => {
    let movement = (rocket.style.top = `${rocket.offsetTop - 10}px`);
    rocket.style.top = movement;
    console.log(rocket.offsetLeft);
  });
  down.addEventListener("click", () => {
    let movement = (rocket.style.top = `${rocket.offsetTop + 10}px`);
    rocket.style.top = movement;
    shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
  });
  //unable to get these to work after numerous attempts, stack overflow was not helpful
  left.addEventListener("click", () => {
    // rocket.translateX = moveY + "px";
    // let movement = (rocket.style.left = `${rocket.offsetLeft - 10}px`);
    // rocket.style.top = movement;
  });
  right.addEventListener("click", () => {});
});
