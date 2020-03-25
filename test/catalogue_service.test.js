const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});

describe("catalogueService.checkBook", () => {
  test("returns true if the book exists in the list", () => {
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
  });

test("returns false if the book doesn't exist in the list", () => {
  expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
  });
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });

  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
  });
});


describe("catalogueService.countBooksByKeyword", () => {
  test("returns the number of books whose title contains the given keyword", () => {
    expect(catalogueService.countBooksByKeyword("Assassin")).toBe(3);
  });
  test("returns 0 if none of the books' title contains the given keyword", () => {
    expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
  });
  test("returns the number of books whose title contains the given number", () => {
    expect(catalogueService.countBooksByKeyword("2666")).toBe(1);
  });
  test("returns 'Invalid input' if the keyword is not a string", () => {
    expect(catalogueService.countBooksByKeyword(2666)).toBe("Invalid input");
  });
});


describe("catalogueService.getBooksByAuthor", () => {
  test("returns an array of books written by a given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]);
  });
  test("returns an array of books written by a given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens",
      "The Origin of Species by Charles Darwin"
    ]);
  });
  test("returns an empty array if no matches are found", () => {
    expect(catalogueService.getBooksByAuthor("Jim")).toEqual([]);
  });
  test("returns 'Invalid input' if the input is not a string", () => {
    expect(catalogueService.getBooksByAuthor(true)).toBe("Invalid input");
  });
});