const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring
const book = getBook(2);
// Without destructuring
// const title = book.title;
// const author = book.author;
// With destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author);

// Destructuring with arrays
console.log(genres);
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ["Erotic", ...genres, "epic fantasy"];
console.log(newGenres);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
// Having changed property of pages after spreading ...book overrides the value of pages in the object.
updatedBook;

// Arrow functions
const getYear = (yr) => yr.split("-")[0];
// Must return value if using a fn block for multiple lines
// const getYear = (yr) => {
//   return yr.split("-")[0];
// };
console.log(getYear(publicationDate));

// Template Literals
const summary = `${title} by ${author} is an excellent book published in ${getYear(
  publicationDate
)} which ${
  hasMovieAdaptation
    ? "has a movie adaptation"
    : "does not have a movie adaptation."
}`;
console.log(summary);

// Ternary operator
const bookSize = pages > 1000 ? "Hefty Book." : "Thin Book.";
console.log(bookSize);
console.log(`${title} is a ${bookSize}`);

// Short circuiting
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie.");
console.log(!hasMovieAdaptation && "This book has no movie.");

// falsy value: 0, '', null, undefined, false, NaN
console.log("Gojo Satoru" && "The Honored One");
console.log(0 && "Some string");

// || (OR) returns immediately when value is true
console.log(true || "Some string");
console.log(false || "Some string");
console.log(false ?? "Some string");

// Book does not have korean translation
console.log(book.translations.korean);
const koreanTranslation = book.translations.korean || "Not Translated!";
console.log(koreanTranslation);

console.log(book.reviews.librarything.reviewsCount);
// This gives us wrong value, because 0 is considered false, but in our
// cause we have 0 reviews for librarything which we want in the variable.
const countWrong = book.reviews.librarything.reviewsCount || "No data";
console.log(countWrong);

// To fix the above problem we use Nullish coalescing operator (??)
const countRight = book.reviews.librarything.reviewsCount ?? "No data";
console.log(countRight);

// Optional chaining
function getReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
const otherBook = getBook(3);
console.log(getReviewCount(otherBook));

// The Array Map Method
*/

function getReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// Array MAP Method
const book = getBooks(); // getBooks() return object stored in variable "data"

const m = [1, 2, 3, 4, 5].map((m) => m * 2);
console.log(m);

const bookTitles = book.map((t) => t.title);
console.log(bookTitles);

const essentialBookData = book.map((b) => ({
  title: b.title,
  author: b.author,
  reviewsCount: getReviewCount(b),
}));

console.log(essentialBookData);

// Filter method
const thinBooksWithMovie = book
  .filter((b) => b.pages < 1000)
  .filter((b) => b.hasMovieAdaptation);
console.log(thinBooksWithMovie);

const adventureBooks = book
  .filter((b) => b.genres.includes("adventure"))
  .map((b) => b.title);
console.log(adventureBooks);

// Reduce method
const totalPages = book
  .filter((b) => b.genres.includes("adventure"))
  .reduce((acc, b) => acc + b.pages, 0);
console.log(totalPages);

// Sort method
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); // slice() to create a copy of the array before sorting to prevent mutation of original array
console.log(sorted);

const sortedByPages = book.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);
