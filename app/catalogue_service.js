// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}

function checkBook(book) {
  for (let i = 0; i<catalogue.length; i++){
    if (book === catalogue[i]){
      return true;
    }
  } return false;
}

function countBooksByFirstLetter(letter) {
  let num = 0;
  for (let i = 0; i<catalogue.length; i++){
    if (catalogue[i].startsWith(letter)){
      num++;
    }
  } return num;
}

function countBooksByKeyword(keyword) {
  let num = 0;
  let lowerCaseCatalogue = [];
  if (typeof keyword != "string"){
    return "Invalid input";
  }
  for (let i = 0; i<catalogue.length; i++){
    lowerCaseCatalogue.push(catalogue[i].toLowerCase());
  }
  for (let i = 0; i<lowerCaseCatalogue.length; i++){
    if (lowerCaseCatalogue[i].includes(keyword.toString().toLowerCase())){
      num++;
  }
  } return num
};


function getBooksByAuthor(author) {
  if (typeof author != "string"){
    return "Invalid input";
  }
  return catalogue.filter(currentAuthor => currentAuthor.includes(author));
  
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};

