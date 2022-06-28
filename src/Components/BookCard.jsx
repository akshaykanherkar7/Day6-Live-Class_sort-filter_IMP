import React from "react";

const BookCard = ({ bookData }) => {
  return (
    <div>
      <img src={bookData.cover_photo} width="100%" alt="" />
      <div>{bookData.book_name}</div>
      <div>{bookData.release_year}</div>
      <div>{bookData.author}</div>
    </div>
  );
};

export default BookCard;
