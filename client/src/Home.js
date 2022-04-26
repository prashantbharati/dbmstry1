import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.div1}>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.div11}>
            <Typography className={classes.div1text}>
              Never Pay Without Using Skropay
            </Typography>

            <br />
            <Typography style={{ color: "grey" }}>
              Skropay is a secure transaction platform that completely protects
              you from being scammed when you want to buy or sell online with
              someone you don't know
            </Typography>

            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  color: "black",
                  borderWidth: 1,
                  border: "2px ",
                  borderColor: "blue",
                  textTransform: "none",
                  width: "150px",
                  borderRadius: "999px 999px 999px 999px",
                  textAlign: "center",
                  backgroundColor: "white",
                  fontWeight: "700",
                }}
                variant="contained"
                align="right"
              >
                I am a Seller
              </Button>

              <Button
                style={{
                  color: "white",
                  borderWidth: 1,
                  border: "2px solid",
                  borderColor: "white",
                  textTransform: "none",
                  width: "150px",
                  borderRadius: "999px 999px 999px 999px",
                }}
                variant="outline-dark"
                align="right"
              >
                I am a Buyer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
