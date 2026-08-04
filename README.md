# Library

Virtual library for managing books, developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), with a focus on **object constructors**, **prototypes**, and **separating data from presentation**.

## Project Objective

The main objective was to practice:
- Object constructors and prototype functions
- Separation of responsibilities: data logic vs. DOM presentation
- Storing objects in an array and manipulating them dynamically
- Using the `<dialog>` element for modal forms
- Associating DOM elements with objects via `data-attributes`

> **Update (lesson [Classes](https://www.theodinproject.com/lessons/node-path-javascript-classes#practice)):** The `Book` definition was refactored from a *constructor function* to a **`class`**, keeping the same behavior. The `toggleRead()` method, previously added via `Object.defineProperty` on the prototype to control enumerability, is now declared directly inside the class body, where methods are non-enumerable by default.

> **Update (lesson [Form Validation with JavaScript](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript#warmup)):** The add book form was updated to use the **Constraint Validation API** with live validation (`input`) and submission validation (`submit`). Custom error messages were also added for each field (title, author, and page count), along with visual highlighting for invalid inputs.

## What is it?

An application for registering and managing a collection of books, containing:
- **Dynamic table** with the list of registered books
- **Signup modal** for adding new books
- **Reading status control** with a visual indicator (read/unread)
- **Book removal** from the library

## How to use

1. Open the `index.html` file in your browser
2. Click "Add" to open the new book form
3. Fill in the title, author, and page count
4. Click "Confirm" to add the book to the table
5. Use "Marks Read/Unread" to toggle the reading status
6. Use "Remove" to delete a book from the list

## Features

- **Add books**: Modal form (`<dialog>`) with title, author, and page count fields
- **Dynamic table**: Automatic rendering of the book list from the data array
- **Reading toggle**: Colored visual indicator (red/green) for reading status, using a prototype function on the `Book` constructor
- **Remove books**: Deletion of individual books via `data-attributes` associated with the unique ID
- **Unique IDs**: Each book receives a unique identifier via `crypto.randomUUID()`
- **JavaScript validation**: Use of the Constraint Validation API with custom messages and visual error feedback in the form
- **No persistence**: Data exists only in memory during the session, as proposed by the lesson

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Visualization

<img width="1309" height="278" alt="localhost_5500_Javascript_top-library" src="https://github.com/user-attachments/assets/2bd17044-68e1-44f7-b731-0e5e1dc10cb5" />

---

Project developed following: [The Odin Project - Library](https://www.theodinproject.com/lessons/node-path-javascript-library)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
