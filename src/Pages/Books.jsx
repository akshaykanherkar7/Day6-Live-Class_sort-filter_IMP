import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookLists from "../Components/BookLists";
import FilterSort from "../Components/FilterSort";
import { getBookAPI } from "../Redux/action";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { books, isLoading, isError } = useSelector((state) => state);

  useEffect(() => {
    const urlCategory = searchParams.getAll("category");
    const urlSort = searchParams.get("sortBy");

    if (books.length === 0 && (!urlCategory || !urlSort)) {
      dispatch(getBookAPI());
    }
  }, []);
  console.log("books:", books);

//   if (isLoading) return <div style={{ textAlign: "center" }}>Loading...</div>;
//   if (isError) return <div style={{ textAlign: "center" }}>Error...</div>;
  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapp>
          <FilterSort></FilterSort>
        </FilterSortWrapp>
        <BookListWrapper>
          <BookLists books={books}></BookLists>
        </BookListWrapper>
      </BookPageWrapper>
    </div>
  );
};

export default Books;

const BookPageWrapper = styled.div`
  display: flex;
`;

const FilterSortWrapp = styled.div`
  width: 300px;
  border: 1px solid red;
`;

const BookListWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;
