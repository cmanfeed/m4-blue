import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import WishList from "./pages/WishList/WishList";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";


axios.defaults.baseURL = "https://nintendo-shop.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
