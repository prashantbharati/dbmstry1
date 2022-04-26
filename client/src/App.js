import React from "react";
import Home from "./Home.js";
import User from "./User.js";
import Guy from "./Guy.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user" exact element={<User />} />
        <Route path="/guy" exact element={<Guy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
