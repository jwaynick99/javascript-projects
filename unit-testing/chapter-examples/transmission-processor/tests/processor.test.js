const processor = require('../processor.js')

describe("transmission processor", function() {

   test("takes a string returns an object", () => {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
   });
   test("should return -1 if does not contain '::'", () => {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1)
   })
   test("returns id in object", () => {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
   })
   test("converts id to a number", () => {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701)
   })
   test("returns rawData in object", () => {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
   })
   test("returns -1 for rawData if missing < at position 0", () => {
    let result = processor("9701::489584872710>")
    expect(result.rawData).toBe(-1);
   })
 });