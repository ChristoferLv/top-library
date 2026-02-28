console.log("script");

let myLibrary = [];

function Book(name, author) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
}

function addBookToLibrary(name, author) {
    const newBook = new Book(name, author);
    myLibrary.push(newBook);
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

addBookToLibrary("livro1", "autor1");
addBookToLibrary("livro2", "autor2");
addBookToLibrary("livro3", "autor3");
addBookToLibrary("livro4", "autor4");

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


