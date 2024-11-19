"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

////////////////// ! destructuring arrays ! //////////////////

// todo destructure the books array into two variables called firstBook and secondBook. //
const [firstBook, secondBook] = books;

// todo destructure the books array into a variable called thirdBook. You must skip the first two books. //
const [, , thridBook] = books;

// todo below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584. //

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// todo below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0. //

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings);
// console.log(oneStarRatings);
// console.log(threeStarRatings);

////////////////// ! destructuring objects ! //////////////////

// todo destructure the first book object from the books array into variables called title, author and ISBN. //

const [{ title, author, ISBN }] = books;

// console.log(title);
// console.log(author);
// console.log(ISBN);

// todo each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property. //

const { keywords: tags } = books[0];
// console.log(tags);

// todo the seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'. //

const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language);
// console.log(programmingLanguage);

// todo below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array. //

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);

// console.log(bookTitle);
// console.log(bookAuthor);

// todo destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property. //

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// console.log(bookRating);

// todo write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}". If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'. //

const printBookInfo = function ({ title, author, year = "year unknown" }) {
  return console.log(`${title} by ${author[0]}, ${year}.`);
};

// printBookInfo(books[0]);

////////////////// ! the spread operator ! //////////////////

// todo each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author. Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays). //

const bookAuthors = [...books[0].author, ...books[1].author];

// console.log(bookAuthors);

// todo write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space. //

const spellWord = function (string) {
  return console.log(...string);
};

// spellWord("JavaScript")

//////////////// ! rest pattern and parameters ! ////////////////

// todo destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array). //

const [mainKeyword, ...rest] = books[0].keywords;

// console.log(mainKeyword);
// console.log(rest);

// todo destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable. //

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// console.log(bookPublisher);
// console.log(restOfTheBook);

// todo write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors". //

const printBookAuthorsCount = function (title, ...author) {
  return console.log(`The book "${title}" has ${author.length} authors.`);
};

// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

////////////// ! short circuiting (&& and ||) ! //////////////

// todo write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all. Use short-circuiting. //

const hasExamplesInJava = function (book) {
  return console.log((book.programmingLanguage ||= "no data available"));
};

// hasExamplesInJava(books[4]);

// todo some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting. //

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content.`);
// }

////////// ! the nullish coalescing operator (??) ! //////////

// todo there are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content. //

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content.`);
// }

////////////// ! logical assignments operators ! //////////////

// todo some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators. //

// for (let i = 0; i < books.length; i++) {
//   console.log((books[i].edition ||= 1));
// }

// todo some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false. //

// for (let i = 0; i < books.length; i++) {
//   if (books[i].thirdParty.goodreads.rating < 4.2) {
//     console.log(books[i].highlighted = false);
//   }
// };

////////////// ! looping arrays: the for-of loop ! //////////////

// todo use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects. //

let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}

// console.log(pageSum);

// todo below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array. Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays). //

const allAuthors = [];

for (const book of books) {
  if (typeof book.author === "string") {
    allAuthors.push(book.author);
  } else {
    allAuthors.push(...book.author);
  }
}

// console.log(allAuthors);

// todo use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0. //

// for (const [i, el] of allAuthors.entries()) {
//   console.log(`${i + 1}. ${el}.`);
// }

////////////////// ! enhanced object literals ! //////////////////

// todo below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name. Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already. //

const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// console.log(bookData);

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1].join(", "),
  [bookData[2][0]]: bookData[2][1],
};

// console.log(newBook);

// todo below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way. //

const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

// console.log(newBook2);

////////////////// ! optional chaining (?.) ! //////////////////

// todo write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that. //

const getFirstKeyword = function (book) {
  console.log(book.keywords?.[0]);
};

// getFirstKeyword(newBook2);

////// ! looping objects: object keys, values and entries ! //////

// todo below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array. //

const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

// console.log(entries);

// todo use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array. Push each value to the appropriate inner array in the entries array (use index from entries()). //

// for (const [key, value] of Object.entries(books[0].thirdParty.goodreads)) {
//   entries.push([key, value]);
// }

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
  // console.log(index, value);
}

// console.log(entries);

// todo use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2. //

// const entries2 = [];

// for (const entrie of Object.entries(books[0].thirdParty.goodreads)) {
//   // console.log(entrie);
//   entries2.push([entrie]);
// }

// console.log(entries2);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// todo log the entries and entries2 variables to the console, and compare them. They should look the same. //

// console.log(entries);
// console.log(entries2);

//////////////////////////// ! sets ! ////////////////////////////

// todo below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays). Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...]. //

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

// console.log(allKeywords);

// todo the allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable. //

const uniqueKeywords = new Set(allKeywords);

// console.log(uniqueKeywords);

// todo add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'. //

uniqueKeywords.add("coding").add("science");

// console.log(uniqueKeywords);

// todo delete 'business' from the uniqueKeywords set. //

uniqueKeywords.delete("business");

// console.log(uniqueKeywords);

// todo create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable. //

// const [...uniqueKeywordsArr] = uniqueKeywords;

const uniqueKeywordsArr = [...uniqueKeywords];

// console.log(uniqueKeywordsArr);

// todo delete all items from the uniqueKeywords set. //

uniqueKeywords.clear();

// console.log(uniqueKeywords);

//////////////////// ! maps: fundamentals ! ////////////////////

// todo create a new book, but this time, as a Map. Assign it to the bookMap variable. //

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

// console.log(bookMap);

// todo set a new key in bookMap called pages, and assign it with a number 464. //

bookMap.set("pages", "464");

// console.log(bookMap);

// todo get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}". //

const title1 = bookMap.get("title");
const author1 = bookMap.get("author");

// console.log(`${title1} by ${author1}`);

// todo get the size of bookMap, and log it to the console. //

// console.log(bookMap.size);

// todo check if bookMap has the author key. and if so, log "The author of the book is known" to the console. //

// console.log(
//   bookMap.has("author")
//     ? "The author of the book is known"
//     : "The author of the book is unknow"
// );

////////////////////// ! maps: iteration ! //////////////////////

// todo convert the first book object from the books array into a Map, and assign it to a firstBookMap variable. //

const firstBookMap = new Map(Object.entries(books[0]));

// console.log(firstBookMap);

// todo use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values. //

for (const [key, value] of firstBookMap) {
  if (typeof value === "number") {
    // console.log(key);
  }
}

//////////////////// ! working with strings ! ////////////////////

// todo take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters. //

// console.log(books[0].ISBN);
// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);

// todo below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console. //

const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";

// console.log(quote.indexOf("chess"));

// todo extract the word "boxing" from the same quote string, and log it to the console. //

// console.log(quote.slice(-6));

// todo some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string. //

const isContributor = (authorName) => authorName.includes("Contributor");

// console.log(isContributor("Julie Sussman (Contributor)"));
// console.log(isContributor("Robert Sedgewick"));

// todo write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists). You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces. //

const normalizeAuthorName = function (authorName) {
  const [firstName, lastName] = authorName.toLowerCase().trim().split(" ");
  return console.log(
    firstName.replace(firstName[0], firstName[0].toUpperCase()),
    lastName.replace(lastName[0], lastName[0].toUpperCase())
  );
};

// normalizeAuthorName("  JuliE sussMan (Contributor)");

// todo take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable. //

const newBookTitle = books[1].title.replace("Programs", "Software");

// console.log(newBookTitle);

// todo write a function called logBookTheme that takes book's title (string), and logs to the console:
/*
"This book is about computers" if the title starts with the word "computer",

"This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
*/

const logBookTheme = function (bookName) {
  if (bookName.toLowerCase().startsWith("computer")) {
    console.log("This book is about computers");
  } else if (
    bookName.toLowerCase().includes("algorithms") &&
    bookName.toLowerCase().includes("structures")
  ) {
    console.log("This book is about algorithms and data structures");
  } else if (
    (bookName.toLowerCase().endsWith("system") ||
      bookName.toLowerCase().endsWith("systems")) &&
    !bookName.toLowerCase().includes("operating")
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};

// logBookTheme("Computer Systems: A Programmer's Perspective");
// logBookTheme("Data Structures and Algorithms");

// todo below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories. Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings). //

const logBookCategories = function (str) {
  const categories = str.split(";");

  for (const category of categories) {
    console.log(category);
  }
};

const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

// logBookCategories(bookCategories);

// todo now, the opposite. Each book from the books array has the keywords property. Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon. //

const getKeywordsAsString = function (books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(";");
};

// console.log(getKeywordsAsString(books));

// todo below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page. Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below). //

/*
The Basics__________ 14
Sorting_____________ 254
Searching___________ 372
Graphs______________ 526
Strings_____________ 706
*/

// const logBookChapters = function (book) {
//   for (const [chapter, pages] of bookChapters) {
//     const output = `${chapter}${"_".repeat(20 - chapter.length)}`;
//     console.log(`${output.padEnd(20)} ${pages}`);
//   }
// };

const logBookChapters = function (book) {
  for (const [chapter, pages] of book) {
    console.log(chapter.padEnd(20, "_") + " " + pages);
  }
};

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];

// logBookChapters(bookChapters);

console.log("teste");
