//Code Your Solution Below
window.addEventListener("load", () => {
  let testName = document.getElementById("testName");
  let testDate = document.getElementById("testDate");
  let rocketType = document.getElementById("rocketType");
  let boosterCount = document.getElementById("boosterCount");
  let windRating = document.getElementById("windRating");
  let productionServers = document.getElementById("productionServers");
  let button = document.getElementById("submit");
  button.addEventListener("click", () => {
    if (
      testName.value === "" ||
      testDate.value === "" ||
      rocketType.value === "" ||
      boosterCount.value === "" ||
      windRating.value === ""
    );
    {
      alert("All fields required");
      event.preventDefault();
    }
  });

  console.log(testName.value);
});
