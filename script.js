const myFormDialog = document.getElementById('add-book-dialog');
const showFormDialogButton = document.getElementById('add-book-btn');
const closeButton = document.getElementById("close-btn");
const myForm = document.getElementById('myForm');
const title = document.getElementById("bookName");
const author = document.getElementById("author");
const pageNumber = document.getElementById("pageNumber");
const titleError = document.querySelector("#bookName + div > span.error");
const authorError = document.querySelector("#author + div > span.error");
const pageNumberError = document.querySelector("#pageNumber + div > span.error");


let myLibrary = [];

showFormDialogButton.addEventListener('click', () => {
    myFormDialog.showModal();
});

closeButton.addEventListener('click', () => {
    title.className = "";
    author.className = "";
    pageNumber.className = "";
    titleError.className = "error";
    authorError.className = "error";
    pageNumberError.className = "error";
    titleError.textContent = "";
    authorError.textContent = "";
    pageNumberError.textContent = "";
    myForm.reset();
    myFormDialog.close();
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!title.validity.valid) {
        showTitleError();
    }
    else if (!author.validity.valid) {
        showAuthorError();
    }
    else if (!pageNumber.validity.valid) {
        showPagesError();
    } else {
        const formData = new FormData(event.target);
        addBookToLibrary(formData.get("bookName"), formData.get("author"), formData.get("pageNumber"))
        myForm.reset();
        myFormDialog.close();
    }


});

//Definição de Book com "constructor function"
// function Book(name, author, pageNumber) {
//     this.id = crypto.randomUUID();
//     this.name = name;
//     this.author = author;
//     this.pageNumber = pageNumber;
//     this.read = false;

//     // this.toggleRead = function () {
//     //     this.read = !this.read;
//     // };
//     //Definido dessa forma ele fica enumerable:true por default e acaba sendo pego pelo for in na linha 100
// }

// Object.defineProperty(Book.prototype, "toggleRead", {
//     value: function () {
//         this.read = !this.read;
//     },
//     enumerable: false, //Serve para que não seja "listado" pelo for in nas linhas 100-101
// });


//Definição de book com "class"
class Book {
    constructor(name, author, pageNumber) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.author = author;
        this.pageNumber = pageNumber;
        this.read = false;
    }
    toggleRead() {
        this.read = !this.read;
    }
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
            // if (typeof book[bookField] === 'function') continue;
            const newRowData = document.createElement("td");
            newRowData.innerText = book[bookField];
            if (typeof book[bookField] === 'boolean') {
                const readElem = document.createElement("div");
                readElem.style.setProperty("width", "15px");
                readElem.style.setProperty("height", "15px");
                readElem.style.border = "1px solid #000000"
                readElem.style.backgroundColor = "#F00";
                if (book[bookField]) readElem.style.backgroundColor = "#0F0";
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






title.addEventListener("input", (event) => {
    if (title.validity.valid) {
        titleError.textContent = "";
        titleError.className = "error";
        title.className = "";
    } else {
        showTitleError();
    }
});

author.addEventListener("input", (event) => {
    if (author.validity.valid) {
        authorError.textContent = "";
        authorError.className = "error";
        author.className = "";
    } else {
        showAuthorError();
    }
});

pageNumber.addEventListener("input", (event) => {
    if (pageNumber.validity.valid) {
        pageNumberError.textContent = "";
        pageNumberError.className = "error";
        pageNumber.className = "";
    } else {
        showPagesError();
    }
});

function showTitleError() {
    if (title.validity.valueMissing) {
        titleError.textContent = "Entre um título.";
    } else if (title.validity.tooShort) {
        titleError.textContent = `Título deve ter no mínimo ${title.minLength} caracteres; você entrou ${title.value.length}.`;
    }
    titleError.className = "error active";
    title.className = "invalid";
}

function showAuthorError() {
    if (author.validity.valueMissing) {
        authorError.textContent = "Entre o nome do autor.";
    } else if (author.validity.tooShort) {
        authorError.textContent = `Nome do autor deve ter no mínimo ${author.minLength} caracteres; voce entrou ${author.value.length}.`;
    } else if (author.validity.tooLong) {
        authorError.textContent = `Nome do autor deve ter no máximo ${author.maxLength} caracteres; voce entrou ${author.value.length}.`;
    }
    authorError.className = "error active";
    author.className = "invalid"
}

function showPagesError() {
    if (pageNumber.validity.valueMissing) {
        pageNumberError.textContent = "Entre o número de páginas.";
    } else if (pageNumber.validity.rangeUnderflow) {
        pageNumberError.textContent = "O número de páginas deve ser no mínimo 1";
    } else if (pageNumber.validity.rangeOverflow) {
        pageNumberError.textContent = `O número de páginas pode ser no máximo ${pageNumber.max}`;
    }
    pageNumberError.className = "error active";
    pageNumber.className = "invalid";
}


