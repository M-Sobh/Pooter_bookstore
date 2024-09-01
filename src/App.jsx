import React, { useState } from 'react';
import BookSelector from "./components/BookSelector";
import {calculatePrice} from "./utils/calculatePrice";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([0, 0, 0, 0]);
  const totalPrice = calculatePrice(books);

  return (
    <div className="container align-items-center">
       <h1 className="text-center my-4">Potter Book Store</h1>
        <div className="card p-4 shadow-sm">
          <h3 className="text-center mb-5">Build Your Potter Collection</h3>
          <BookSelector books={books} setBooks={setBooks} />
          <h4 className="text-center mt-4">Total Price: €{totalPrice.toFixed(2)}</h4>
        </div>
        <p className="mt-4 discount-note">
          *Save up to 25% by buying different books: 5% for 2, 10% for 3, 20% for 4, 25% for all 5.
        </p>
    </div>
  )
}

export default App
