import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
              Enjoy Delievery Like Never Before
            </Typography>

            <br />
            <Typography style={{ color: "grey" }}>
              All things delivered within 30 mins or complete moneyback
              guranteed
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
                component={Link}
                to="/guy"
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
                component={Link}
                to="/user"
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
