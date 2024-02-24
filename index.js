const myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 269, "Read");

addBookToLibrary(theHobbit);

for (let item of myLibrary) {
    for (let key in item) {
        console.log(`${key} : ${item[key]}`);
    }
}

function Book(name, author, pageCount, readStatus) {
    this.name = name,
    this.author = author,
    this.pageCount = pageCount,
    this.readStatus = readStatus
}

function addBookToLibrary(book) {
 myLibrary.push(book);
}