console.log("script");
const myFormDialog = document.getElementById('add-book-dialog');
const showFormDialogButton = document.getElementById('add-book-btn');
const closeButton = document.getElementById("close-btn");
const myForm = document.getElementById('myForm');
let myLibrary = [];

showFormDialogButton.addEventListener('click', () => {
    myFormDialog.showModal();
});

closeButton.addEventListener('click', () => {
    myForm.reset();
    myFormDialog.close();
});

myForm.addEventListener('submit', (event) => {
    const formData = new FormData(event.target);
    addBookToLibrary(formData.get("bookName"), formData.get("author"), formData.get("pageNumber"))
    myForm.reset();
});

function Book(name, author, pageNumber) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.read = false;
    this.toggleRead = function () {
        console.log("troca");
        this.read = !this.read;
    };
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

function handleToggleRead(e) {
    const id = e.target.parentElement.getAttribute("data-id");
    for (idx in myLibrary) {
        if (myLibrary[idx].id == id) {
            console.log("trocar")
            myLibrary[idx].toggleRead();
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
            if (typeof book[bookField] === 'function') continue;
            const newRowData = document.createElement("td");
            newRowData.innerText = book[bookField];
            if(typeof book[bookField] === 'boolean'){
                const readElem = document.createElement("div");
                readElem.style.setProperty("width", "15px");
                readElem.style.setProperty("height", "15px");
                readElem.style.border = "1px solid #000000"
                readElem.style.backgroundColor = "#F00";
                if(book[bookField]) readElem.style.backgroundColor = "#0F0";
                newRowData.innerText = "";
                newRowData.append(readElem);
            }
            newRow.append(newRowData);
        }
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remover";
        removeBtn.addEventListener("click", handleRemoveBook);
        newRow.append(removeBtn);

        const toggleBtn = document.createElement("button");
        toggleBtn.innerText = "Marcar Lido/Não Lido";
        toggleBtn.addEventListener("click", handleToggleRead);
        newRow.append(toggleBtn);
        table.append(newRow);
    }
}
drawTable();


