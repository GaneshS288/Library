const dialog = document.querySelector("dialog");
const showDialogButton = document.querySelector("dialog + button");
const addBookButton = document.querySelector(".addBook");
const mainSection = document.querySelector("main");

const myLibrary = [];

class Book {

    constructor(title, author, pageCount, readStatus) {
            this.title = title,
            this.author = author,
            this.pageCount = pageCount,
            this.readStatus = readStatus ? "Read" : "Unread";
    }

    addBookToLibrary(book) {
        myLibrary.push(book);
        this.displayBooks(myLibrary);
    }
    
    toggleReadStatus () {
        this.readStatus == "Read" ? this.readStatus = "Unread" : this.readStatus = "Read";
    }

    deleteBook(event) {
        const index = event.target.parentElement.getAttribute("data-index");
        myLibrary.splice(parseInt(index), 1);
        event.target.parentElement.remove();
        theHobbit.displayBooks(myLibrary);
    }


    displayBooks(array) {

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
                        heading.textContent = "Read:";
                        content.textContent = element.readStatus;
    
                        const toggleReadStatus = document.createElement("button");
                        toggleReadStatus.textContent = "Toggle";
                        div.appendChild(toggleReadStatus);
    
                        toggleReadStatus.addEventListener("click", (event) => {
                            const index = event.target.parentElement.parentElement.getAttribute("data-index");
                            myLibrary[parseInt(index)].toggleReadStatus();
                            this.displayBooks(myLibrary);
                        })
                }
            }
    
            const deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", theHobbit.deleteBook)
            deleteButton.textContent = "Delete";
            bookCard.appendChild(deleteButton);
    
            mainSection.appendChild(bookCard);
        });
    }
    
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 269, true);
const swordPrincessAltina = new Book("Sword Princess Altina", "Yukiya Murasaki", 2000, true);
const braveStory = new Book("Brave Story", "Miyuki Miyabe", 280, false);
const mistborne = new Book("Mistborne", "Brandon Sanderson", 350, false);
const hikaruGaChikyuu = new Book("Hikaru ga Chikyuu ni Ita Koro", "Mizuki Nomura", 700, false)

theHobbit.addBookToLibrary(theHobbit);
theHobbit.addBookToLibrary(swordPrincessAltina);
theHobbit.addBookToLibrary(braveStory);
theHobbit.addBookToLibrary(mistborne);
theHobbit.addBookToLibrary(hikaruGaChikyuu);

showDialogButton.addEventListener("click", (e) => {
    dialog.showModal();
})

addBookButton.addEventListener("click", (e) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pageCount = document.querySelector("#pageCount").value;
    const readStatus = document.querySelector("#readStatus").checked;

    const newBook = new Book(title, author, pageCount, readStatus);
    theHobbit.addBookToLibrary(newBook);
})

theHobbit.displayBooks(myLibrary);