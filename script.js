console.log("script");
const myFormDialog = document.getElementById('add-book-dialog');
const showFormDialogButton = document.getElementById('add-book-btn');
const closeButton = document.getElementById("close-btn");
const myForm = document.getElementById('myForm');

showFormDialogButton.addEventListener('click', () => {
    myFormDialog.showModal();
});

closeButton.addEventListener('click', () => {
    myFormDialog.close();
});

myForm.addEventListener('submit', (event) => {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    addBookToLibrary(formData.get("bookName"), formData.get("author"), formData.get("pageNumber"))


    console.log(event.target.firstElementChild); // { name: 'User Input Value' }
    console.log('Dialog closed with returnValue:', myFormDialog.returnValue);
    console.log(formProps)
});

let myLibrary = [];

function Book(name, author, pageNumber) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
}

function addBookToLibrary(name, author, pageNumber) {
    const newBook = new Book(name, author, pageNumber);
    myLibrary.push(newBook);
    drawTable();
}

/**
 * 
 * @param {Event} e 
 */
function handleRemoveBook(e) {
    e.preventDefault();
    const id = e.target.parentElement.getAttribute("data-id");
    for (idx in myLibrary) {
        if (myLibrary[idx].id == id) {
            myLibrary.splice(idx, 1);
        }
    }
    drawTable();
}



addBookToLibrary("livro1", "autor1", "83");
addBookToLibrary("livro2", "autor2", "94");
addBookToLibrary("livro3", "autor3", "236");
addBookToLibrary("livro4", "autor4", "745");

function drawTable() {
    const table = document.querySelector("table > tbody");
    table.innerHTML = '';
    for (const book of myLibrary) {
        const newRow = document.createElement("tr");
        newRow.setAttribute("data-id", book['id']);
        for (const bookField in book) {
            const newRowData = document.createElement("td");
            newRowData.innerText = book[bookField];
            newRow.append(newRowData);
        }
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remover";
        removeBtn.addEventListener("click", handleRemoveBook);
        newRow.append(removeBtn);
        table.append(newRow);
    }
}
drawTable();


