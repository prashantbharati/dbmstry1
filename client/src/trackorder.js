import React from "react";
import Form3 from "./Form/Form3.js";
import Nav from "./Nav/Nav.js";
const User = ({ oid, setoid }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Nav />
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

        <Form3 oid={oid} setoid={setoid} />
      </div>
    </>
  );
};
export default User;
