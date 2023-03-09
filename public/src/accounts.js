function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //sort objects alphabetically by last name
  const sorted = [...accounts];
  sorted.sort((account1, account2) =>
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
  );
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  //run through all books, if account checked out +=1, add 1 to counter
  const accountId = account.id;
  return books.reduce((totalBorrows, { borrows }) => {
    if (borrows.some((record) => record.id === accountId)) totalBorrows++;
    return totalBorrows;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  ///filter through all books
  return (books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned)
          //if the most recent transaction matches the account and if it has not been returned
      .map((book) => {book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
         //map through the filtered books to add the author object to it
      })
  );
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
