import React from "react";
import Quote from "./Quote";
import TodoApp from "../TodoApp/ToDolisApp";
import Home from "../TodoApp/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/Todoapp" element={<TodoApp />}></Route>
      </Routes>
    </Router>
  );
}
