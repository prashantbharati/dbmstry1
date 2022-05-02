import React, { useEffect } from "react";
import Form from "./Form/Form.js";
import Nav2 from "./Nav/Nav2.js";
import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:5000/guy/customer`,
});
const User = ({ oid, setoid }) => {
  const getdata = async () => {
    const { data } = await api.get("/");

    console.log(data);
  };

  useEffect(getdata);
  //   getdata();

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
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(90deg,rgb(227, 16, 255) 0%,rgb(255, 252, 100) 100%)",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />

        <Form oid={oid} setoid={setoid} />
      </div>
    </>
  );
};
export default User;
