function getBooks(req, res, next) {
  res.send("getBooks");
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