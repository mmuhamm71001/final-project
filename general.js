const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
const public_users = express.Router();

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn]);
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  let booksbyauthor = {};
  Object.keys(books).forEach((key) => {
    if (books[key].author === author) {
      booksbyauthor[key] = books[key];
    }
  });
  res.send(booksbyauthor);
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  let booksbytitle = {};
  Object.keys(books).forEach((key) => {
    if (books[key].title === title) {
      booksbytitle[key] = books[key];
    }
  });
  res.send(booksbytitle);
});

// Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn].reviews);
});

module.exports.general = public_users;

// -----------------------------------------------------------------------
// Below: Task 10-13 implementations using Axios with Promises / async-await
// These call the same API defined above, demonstrating both patterns.
// -----------------------------------------------------------------------

const BASE_URL = "http://localhost:5000";

// Task 10: Get the book list available in the shop – Using async callback function
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("All books:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then((response) => {
      console.log(`Book with ISBN ${isbn}:`, response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
    });
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    console.log(`Books by ${author}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by author ${author}:`, error.message);
  }
}

// Task 13: Search by Title – Using Promises
function getBooksByTitle(title) {
  return axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`)
    .then((response) => {
      console.log(`Books titled ${title}:`, response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(`Error fetching books with title ${title}:`, error.message);
    });
}

module.exports.getAllBooks = getAllBooks;
module.exports.getBookByISBN = getBookByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;
