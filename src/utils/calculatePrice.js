const BOOK_PRICE = 8;
const DISCOUNTS = [0, 0.05, 0.1, 0.2, 0.25];

export function calculatePrice(books) {
  let total = 0;
  let distinctBooksCount = 0;

  while (books.some((quantity) => quantity > 0)) {
    // creates a new array of distinctive books
    books = books.map((quantity) => {
      if (quantity > 0) {
        distinctBooksCount++;
        return quantity - 1;
      }
      return quantity;
    });

    total +=
      distinctBooksCount * BOOK_PRICE * (1 - DISCOUNTS[distinctBooksCount - 1]);
  }

  return total;
}
