function findAuthorById(authors, id) {
  // ref helper function
  return _findElementById(authors, id);
}

function findBookById(books, id) {
   // ref helper function
    return _findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
 const booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 const booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 const newArray = [[...booksBorrowed], [...booksReturned]];
 return newArray;
}

function getBorrowersForBook({ borrows }, accounts) {
  const borrowers = [];
  // iterate through each record in borrows
  for (let record in borrows) {
    const borrowId = borrows[record].id;
       //find matching account using helper function
    const matchingAccount = _findElementById(accounts, borrowId);
    borrowers.push({ ...borrows[record], ...matchingAccount });
  }
  //return first 10 elements as an array
  return borrowers.slice(0, 10);
}

//helper function: finds an element in an array given an id value
function _findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
