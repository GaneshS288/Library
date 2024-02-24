const dialog = document.querySelector("dialog");
const showDialogButton = document.querySelector("dialog + button");
const addBookButton = document.querySelector(".addBook");

const myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 269, "Read");

addBookToLibrary(theHobbit);

showDialogButton.addEventListener("click", (e) => {
    dialog.showModal();
})

addBookButton.addEventListener("click", (e) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pageCount = document.querySelector("#pageCount").value;
    const readStatus = document.querySelector("#readStatus").checked;

    const newBook = new Book(title, author, pageCount, readStatus);
    addBookToLibrary(newBook);
})

function Book(title, author, pageCount, readStatus) {
        this.title = title,
        this.author = author,
        this.pageCount = pageCount,
        this.readStatus = readStatus ? "Read" : "Not Read";
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks(myLibrary);
}

function displayBooks(array) {

    const previousBookCards = document.querySelectorAll(".bookCard");
    previousBookCards.forEach((e) => e.remove());

    array.forEach((element, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div");
            bookCard.appendChild(div);
            bookCard.setAttribute("data-index", `${index}`)

            const heading = document.createElement("h3");
            const content = document.createElement("p");
            div.appendChild(heading);
            div.appendChild(content);

            switch (i) {
                case 0:
                    heading.textContent = "Title:";
                    content.textContent = element.title;
                    break;

                case 1:
                    heading.textContent = "Author:";
                    content.textContent = element.author;
                    break;

                case 2:
                    heading.textContent = "Pages:";
                    content.textContent = element.pageCount;
                    break;

                case 3:
                    heading.textContent = "Read";
                    content.textContent = element.readStatus;
            }
        }

        const deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", deleteBook)
            deleteButton.textContent = "Delete";
            bookCard.appendChild(deleteButton);

            document.body.appendChild(bookCard);
    });
}

function deleteBook(event) {
    const index = event.target.parentElement.getAttribute("data-index");
    myLibrary.splice(parseInt(index), 1);
    event.target.parentElement.remove();
    displayBooks(myLibrary);
}

displayBooks(myLibrary);