import React, { useEffect, useState } from "react";

import Nav2 from "./Nav/Nav2.js";
import axios from "axios";
import BasicTable from "./table2";
const api = axios.create({
  baseURL: `http://localhost:5000/guy/orders`,
});
const Guy = ({ oid, setoid }) => {
  const [res, setresult] = useState([]);

  const perform = async () => {
    const { data } = await api.get("/");

    console.log(data.ans);
    setresult(data.ans);
    console.log(res);
  };

  useEffect(() => {
    perform();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Nav2 />
      </div>

      <div
        style={{
          display: "flex",
          height: "300vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(90deg,rgb(227, 16, 255) 0%,rgb(255, 252, 100) 100%)",
        }}
      >
        <div>
          <BasicTable data1={res} />
        </div>
      </div>
    </>
  );
};
export default Guy;
