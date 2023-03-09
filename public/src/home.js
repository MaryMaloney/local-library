function getTotalBooksCount(books) {
  // helper function 3: determines length of item array
 return arrayItemCount(books);
}

function getTotalAccountsCount(accounts) {
 // helper function 3: determines length of item array
return arrayItemCount(accounts);
}

function getBooksBorrowedCount(books) {
const booksCheckedOut = books.filter(
(book) => book.borrows.filter((record) => record.returned === false).length > 0
);
return booksCheckedOut.length;
}

function getMostCommonGenres(books) {
/// helper function 1: sorts to top 5
return _sortWithSlice(
  books.reduce((genres, book) => {
      const matchingGenre = genres.find((genre) => genre.name === book.genre);
   !matchingGenre ? genres.push({ name: book.genre, count: 1 })
        : matchingGenre.count++;
      return genres;
    }, [])
);
}

function getMostPopularBooks(books) {
///helper function 1: sorts to top 5
return _sortWithSlice(
  books.map(({ title, borrows }) => ({
    name: title, count: arrayItemCount(borrows),
  }))
);
}

function getMostPopularAuthors(books, authors) {
//helper function 1: sorts to top 5
return _sortWithSlice(
  authors.map(({ name: { first, last }, id }) => ({
    name: `${first} ${last}`,
    count: _borrowsByAuthor(books, id), //helper function 2: determines the number of times this author is found in each books borrows arrays
  }))
);
}


//helper function 1: to get first 5 items 
function _sortWithSlice(array, sliced = 5) {
const newArray = [...array];
return newArray
  .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
  .slice(0, sliced);
}

//helper function 2: determines each authors total number of borrows 
function _borrowsByAuthor(books, id) {
return books.reduce((totalBorrows, { authorId, borrows }) => {
if (authorId === id) totalBorrows += arrayItemCount(borrows);
  return totalBorrows;
}, 0);
}

///helper function 3: counts any type of item based on the length of the array
function arrayItemCount(item) {
return item.length;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
