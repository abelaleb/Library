const myLibrary = [];

const form = document.getElementById("bookForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  
  if(bookTitle.trim() !== "" && bookAuthor.trim() !== ""){
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  myLibrary.push(book);
  addBookToLibrary();
  form.reset();
  }
  else{
    alert("Please provide both title and author for the book.")
  }
});

function addBookToLibrary() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.textContent = `${book.title} by ${book.author}`;
    bookList.appendChild(bookItem);
  });
}

function Book() {
  // the constructor...
}

console.log(myLibrary);
