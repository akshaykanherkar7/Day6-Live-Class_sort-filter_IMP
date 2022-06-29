import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";
import { useEffect } from "react";
import { getBookAPI } from "../Redux/BookReducer/bookaction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const BookLists = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  const location = useLocation();

  useEffect(() => {
    if (books.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy");

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };

      dispatch(getBookAPI(getBooksParams));
      console.log("getBooksParams:", getBooksParams);
    }
  }, [location.search]);
  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          return (
            <BookCardWrapper key={singleBook.id}>
              <BookCard bookData={singleBook} />
              <Link to={`/book/${singleBook.id}`}>Goto Book Detail</Link>
            </BookCardWrapper>
          );
        })}
    </>
  );
};

export default BookLists;

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  padding: 5px;
  width: 200px;
`;
