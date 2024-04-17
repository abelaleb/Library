const myLibrary = [];
let currentBook;
let title, author;

function book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;
}
const form = document.getElementById("bookForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;

  if (bookTitle.trim() !== "" && bookAuthor.trim() !== "") {
    const books = new book(bookTitle, bookAuthor);
    myLibrary.push(books);
    addBookToLibrary();
    form.reset();
  } else {
    alert("Please provide both title and author for the book.");
  }
});

function addBookToLibrary() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookTile = document.createElement("div");
    bookTile.classList.add("bookItem");
    const bookTitle = document.createElement("div");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = `"${book.title}"`;
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = `${book.author}`;
    const read = document.createElement("button");
    read.classList.add("read");
    read.textContent = `unread`;
    read.addEventListener("click", function () {
      if (read.classList.contains("read")) {
        read.textContent = "unread";
        read.style.backgroundColor = "#ff0037"; // Set style for unread button
        read.classList.remove("read");
        read.classList.add("unread");
      } else {
        read.textContent = "read";
        read.style.backgroundColor = "#04a504"; // Set style for read button
        read.classList.remove("unread");
        read.classList.add("read");
      }
    });

    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = `remove`;
    remove.addEventListener("click", function () {
      const index = myLibrary.indexOf(book);
      if (index !== -1) {
        myLibrary.splice(index, 1);
      }
      bookList.removeChild(bookTile);
    });

    bookTile.append(bookTitle, bookAuthor, read, remove);
    bookList.appendChild(bookTile);
    // bookItem.textContent = `Book: ${books.title} Author: ${books.author}`;
  });
}
