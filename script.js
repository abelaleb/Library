const myLibrary = [];

class Book {
  constructor(title, author, readStatus = false) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.render();
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    this.render();
  }

  toggleReadStatus(book) {
    book.readStatus = !book.readStatus;
    this.render();
  }

  render() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    this.books.forEach((book) => {
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
      read.addEventListener("click", () => {
        this.toggleReadStatus(book);
      });

      const remove = document.createElement("button");
      remove.classList.add("remove");
      remove.textContent = `remove`;
      remove.addEventListener("click", () => {
        this.removeBook(book);
      });

      bookTile.append(bookTitle, bookAuthor, read, remove);
      bookList.appendChild(bookTile);
    });
  }
}

const library = new Library();

const form = document.getElementById("bookForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookReadStatus = document.getElementById("readStatus").checked;

  if (bookTitle.trim() !== "" && bookAuthor.trim() !== "") {
    const book = new Book(bookTitle, bookAuthor, bookReadStatus);
    library.addBook(book);
    form.reset();
  } else {
    alert("Please provide both title and author for the book.");
  }
});
