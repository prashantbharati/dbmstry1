import React from "react";
import Form5 from "./Form/Form5.js";
import Nav2 from "./Nav/Nav2.js";
import { Grid, Typography } from "@material-ui/core";
import segment4 from "./images/segment 4.jpg";
const Payment = ({ oid, setoid }) => {
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

        <Form5 oid={oid} setoid={setoid} />
      </div>

      {/* <div
        style={{
          backgroundColor: "pink",
          height: "100vh",
          backgroundImage: `url('${segment4}')`,
        }}
      >
        <Grid container>
          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "120%",
              }}
            >
              <div
                style={{
                  width: "80%",
                }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Typography
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "60px",
                  }}
                >
                  User's Payment is Recieved
                </Typography>
                <br />
              </div>
            </div>
          </Grid>
        </Grid>
      </div> */}
    </>
  );
};
export default Payment;
