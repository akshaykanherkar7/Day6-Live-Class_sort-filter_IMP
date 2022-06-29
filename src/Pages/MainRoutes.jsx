import React from "react";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "../hoc/RequiredAuth";
import Books from "./Books";
import EditBook from "./EditBook";
import Login from "./Login";
import SingleBook from "./SingleBook";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/book/:id" element={<SingleBook />}></Route>
        <Route
          path="/book/:id/edit"
          element={
            <RequiredAuth>
              <EditBook />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<h1>Page Not Found!!</h1>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
