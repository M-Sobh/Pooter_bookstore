import React from "react";

export default function BookSelector({ books, setBooks }) {
  const handleChange = (index, value) => {
    const newBooks = [...books];
    newBooks[index] = value;
    setBooks(newBooks);
  };

  return (
    <div className="row">
      {books.map((book, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
          <div className="input-group">
            <label className="input-group-text">Part {index + 1}</label>
            <input
              type="number"
              className="form-control"
              min="0"
              value={book}
              onChange={(e) => handleChange(index, parseInt(e.target.value))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
