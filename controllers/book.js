import Book from "../models/book.js";

async function getBooks(req, res, next) {
  try {
    const books = await Book.find();

    res.send(books);
  } catch (error) {
    next(error);
  }
}

function getBook(req, res, next) {
  res.send("getBook");
}

function createBook(req, res, next) {
  res.send("createBook");
}

function updateBook(req, res, next) {
  res.send("updateBook");
}

function deleteBook(req, res, next) {
  res.send("deleteBook");
}

export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
