const dialog = document.querySelector("dialog");
const showDialogButton = document.querySelector("dialog + button");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pageCount = document.querySelector("#pageCount");
const addBookButton = document.querySelector(".addBook");



const myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 269, "Read");

addBookToLibrary(theHobbit);

showDialogButton.addEventListener("click", (e) => {
    dialog.showModal();
} )

addBookButton.addEventListener("click", (e) => {
    const newBook = new Book(title.value, author.value, pageCount.value, "read");
    myLibrary.push(newBook);
})
/*for (let item of myLibrary) {
    for (let key in item) {
        console.log(`${key} : ${item[key]}`);
    }
}*/

function Book(name, author, pageCount, readStatus) {
    this.name = name,
    this.author = author,
    this.pageCount = pageCount,
    this.readStatus = readStatus
}

function addBookToLibrary(book) {
 myLibrary.push(book);
}