const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("should return less than five", () => {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    });
    test("should return greater than five", () => {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });
    test("should return equal to five", () => {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.")
    })
})

