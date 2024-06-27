function makeLine(size, char = "#") {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}
console.log(makeLine(7, "-"))

function makeSquare(size, char = "#") {
    let square = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square += char;
        }
        if (i < size -1) {
            square += "\n";
        }
    }
    return square;
}
console.log(makeSquare(5, "!"));

function makeRectangle(width, height, char = "#") {
    let rectangle = ""
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangle += char;
        }
        if (i < height -1) {
            rectangle += "\n";
        }
    }
    return rectangle;
}
console.log(makeRectangle(10, 3, "?"))

function makeDownwardstairs(height, char) {
    let stairs = ""
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1, char) + "\n");
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardstairs(5, "H"))

function makeSpaceLines(numSpaces, numChars, char) {
    let spaces = "";
    for (let i = 0; i < numSpaces; i++) {
        spaces += " ";
    }
    let spaceLine = spaces + makeLine(numChars, char) + spaces
    return spaceLine
}
console.log(makeSpaceLines(3,5, "U"));

function makeIsoscelesTriangle(height, char) {
    let isoscelesTriangle = "";
    for (let i = 0; i < height; i++) {
        isoscelesTriangle += (makeSpaceLines(height - i - 1, 2 * i + 1, char) + "\n");
    }
    return isoscelesTriangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5, "8"));

function reverse(string) {
    let strArray = string.split("")
    let revStrArray = strArray.reverse()
    return revStrArray.join("");
}

function makeDiamond(height, char) {
    let diamond = ""
    diamond += makeIsoscelesTriangle(height, char);
    diamond += "\n" + reverse(diamond)
    return diamond;
}
console.log(makeDiamond(5, "-"))