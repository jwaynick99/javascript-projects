// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("organization should be 'nonprofit'", () => {
    expect(launchcode.organization).toEqual("nonprofit");
  });
  test("executiveDirector should be 'Jeff'", () => {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  test("check cool employees", () => {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  test("checks programs offered", () => {
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });
  test("check only divisible by 2", () => {
    let result = launchcode.launchOutput(2);
    expect(result).toEqual("Launch!");
  });
  test("check only divisible by 3", () => {
    let result = launchcode.launchOutput(3);
    expect(result).toEqual("Code!");
  });
  test("Check only divisible by 5", () => {
    let result = launchcode.launchOutput(5);
    expect(result).toEqual("Rocks!");
  });
  test("Check divisible 2 and 3", () => {
    let result = launchcode.launchOutput(6);
    expect(result).toEqual("LaunchCode!");
  });
  test("check divisible by 3 and 5", () => {
    let result = launchcode.launchOutput(15);
    expect(result).toEqual("Code Rocks!");
  });
  test("check divisble 2 and 5", () => {
    let result = launchcode.launchOutput(10);
    expect(result).toEqual("Launch Rocks! (CRASH!!!!)");
  });
  test("check divisible by 2, 3 and 5", () => {
    let result = launchcode.launchOutput(150);
    expect(result).toEqual("LaunchCode Rocks!");
  });
  test("Check argument NOT divisible by 2, 3 or 5", () => {
    let result = launchcode.launchOutput(1);
    expect(result).toEqual("Rutabagas! That doesn't work.");
  });
});