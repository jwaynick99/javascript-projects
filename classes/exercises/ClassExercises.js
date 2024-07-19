// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, beenDiscarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numCheckedOut = numCheckedOut;
        this.beenDiscarded = beenDiscarded;
    }
    checkOut(uses = 1){
        this.numCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, beenDiscarded){
        super(title, author, copyrightDate, ISBN, numPages, numCheckedOut, beenDiscarded);
    }
    discard(currentYear){
        if (currentYear - this.copyrightDate > 5){
            this.beenDiscarded = "Yes"
        }
    }
}
class Novel extends Book{
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, beenDiscarded){
        super(title, author, copyrightDate, ISBN, numPages, numCheckedOut, beenDiscarded);
    }
    discard(){
        if (this.numCheckedOut > 100){
            this.beenDiscarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let pride = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");


// Code exercises 4 & 5 here:
console.log(shuttleManual);
shuttleManual.discard(2024);
console.log(shuttleManual);

console.log(pride);
pride.checkOut(5);
console.log(pride);