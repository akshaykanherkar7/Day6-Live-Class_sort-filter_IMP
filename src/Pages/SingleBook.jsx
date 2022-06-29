import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBookAPI } from "../Redux/BookReducer/bookaction";

const SingleBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { books } = useSelector((state) => state.book);
  const [currentBook, setCurrentBook] = useState({});

  // on refresh, or on anew tab, if we don't have the book data
  useEffect(() => {
    if (books?.length === 0) {
      dispatch(getBookAPI());
    }
  }, [books?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = books?.find((book) => book.id === Number(id));
      temp && setCurrentBook(temp); //if temp have some id
    }
  }, [books, id]);
  console.log(currentBook);
  return (
    <div>
      <h1>{currentBook?.book_name}</h1>
      <h1>{currentBook?.category}</h1>
      <h1>{currentBook?.release_year}</h1>
      <h1>{currentBook?.author}</h1>
      <button>
        <Link to={`/book/${currentBook.id}/edit`}>Edit</Link>
      </button>
    </div>
  );
};

export default SingleBook;
