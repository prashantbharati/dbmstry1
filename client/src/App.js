import React, { useState } from "react";
import Home from "./Home.js";
import User from "./User.js";
import Guy from "./Guy.js";
import Endpage1 from "./endpage1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [oid, setoid] = useState(-1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/user"
          exact
          element={<User oid={oid} setoid={setoid} />}
        />
        <Route path="/guy" exact element={<Guy />} />
        <Route
          path="/endpage1"
          exact
          element={<Endpage1 oid={oid} setoid={setoid} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
