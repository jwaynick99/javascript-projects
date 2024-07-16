const whoWon = require('../RPS.js');

describe("Rock, Paper, Scissors", function(){
    test("should return TIE when both have same choice", () => {
        let output = whoWon("paper", "paper")
        expect(output).toEqual("TIE!")
    });
    test("p2 should win when p1 chooses rock and p2 chooses paper", () => {
        let output = whoWon("rock", "paper");
        expect(output).toEqual("Player 2 wins!")
    });
    test("p2 should win when p1 chooses scissors and p2 chooses rock", () => {
        let output = whoWon("scissors", "rock ")
        expect(output).toEqual("Player 2 wins!")
    });
    test("p2 should win when p1 picks paper, and p2 picks scissors", () => {
        let output = whoWon("paper", "scissors")
        expect(output).toEqual("Player 2 wins!")
    });
    test("should return in valid if one player chooses and invald choice", () => {
        let output = whoWon("asparagus", "rock");
        expect(output).toEqual("Someone has made an invalid choice!")
    });
});