const isPalindrome = require('../palindrome.js');

describe("testing isPalindrome", function(){
    //positive test cases
    test("should return true for a single letter", function(){
        expect(isPalindrome("a")).toBe(true);
    });
    test("should return true for a single letter repeated", function(){
        expect(isPalindrome("aaa")).toBe(true);
    });
    test("should return true for a simple palindrome", function(){
        expect(isPalindrome("aba")).toBe(true);
    });
    test("should return true for a longer palindrome", function(){
        expect(isPalindrome("racecar")).toBe(true);
    });
    //negative test cases
    test("should return false for short non-palindrome", function(){
        expect(isPalindrome("ab")).toBe(false)
    });
    test("should return false for long non-palindrome", function(){
        expect(isPalindrome("launchcode")).toBe(false)
    });
    test("should return false for case-sensitive palindrome", function(){
        expect(isPalindrome("abA")).toBe(false)
    });
    test("should return false for white spaced palindrome", function(){
        expect(isPalindrome("so many dynamos")).toBe(false)
    });
    //edge cases
    test("should consider the empty string a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
     });
})