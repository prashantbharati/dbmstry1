import { Typography } from "@material-ui/core";
import React from "react";
import endimage1 from "./images/endimg.png";
const endpage2 = ({ oid, setoid }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${endimage1}')`,
          position: "relative",
          backgroundSize: "cover",
          overflow: "hidden",
          color: "black",
          height: "100vh",
        }}
      >
        <div
          id="lastpage"
          style={{
            position: "absolute",
            color: "black",
            right: "95px",
            bottom: "320px",
            fontWeight: "600",
            width: "300px",
          }}
        >
          <Typography variant="h3">Your Payment has been recieved</Typography>
        </div>
      </div>
    </>
  );
};

export default endpage2;
