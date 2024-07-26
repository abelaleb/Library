const myLibrary = [];
let currentBook;
let title, author;

function book(title, author, readStatus = false) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
}

const form = document.getElementById("bookForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookReadStatus = document.getElementById("readStatus").checked;

  if (bookTitle.trim() !== "" && bookAuthor.trim() !== "") {
    const books = new book(bookTitle, bookAuthor, bookReadStatus);
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
    read.classList.add(book.readStatus ? "read" : "unread");
    read.textContent = book.readStatus ? "read" : "unread";
    read.style.backgroundColor = book.readStatus ? "#04a504" : "#ff0037";
    read.addEventListener("click", function () {
      book.readStatus = !book.readStatus;
      read.textContent = book.readStatus ? "read" : "unread";
      read.style.backgroundColor = book.readStatus ? "#04a504" : "#ff0037";
      read.classList.toggle("read");
      read.classList.toggle("unread");
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
  });
}
