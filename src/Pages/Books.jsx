import React from "react";
import BookLists from "../Components/BookLists";
import FilterSort from "../Components/FilterSort";
import styled from "styled-components";

const Books = () => {

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
          <BookLists></BookLists>
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
