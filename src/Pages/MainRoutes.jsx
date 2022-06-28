import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Books from "./Books";
import EditBook from "./EditBook";
import SingleBook from "./SingleBook";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/books/:id" element={<SingleBook />}></Route>
        <Route path="/books/:id/edit" element={<EditBook />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="*" element={<h1>Page Not Found!!</h1>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
