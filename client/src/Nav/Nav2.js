import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles.js";

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ height: "5vh" }} className={classes.header}>
        <Grid container>
          <Grid item md={3}>
            <a id="home" className={classes.headerullia} href="/getorders">
              <Typography>Orders</Typography>
            </a>
          </Grid>
          <Grid item md={3}>
            <a id="filter" className={classes.headerullia} href="/filter">
              <Typography>Customers</Typography>
            </a>
          </Grid>
          <Grid item md={3}>
            <a id="iwell" className={classes.headerullia} href="/iwell">
              <Typography>Check Payment</Typography>
            </a>
          </Grid>

          <Grid item md={3}>
            <Button className={classes.button} variant="contained">
              contact us
            </Button>
          </Grid>
        </Grid>
      </div>

      <section class="banner"></section>

      {window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle(classes.headersticky, window.scrollY > 0);

        var logo = document.getElementById("logotop");
        logo.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var home = document.getElementById("home");
        home.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var filter = document.getElementById("filter");
        filter.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var iwell = document.getElementById("iwell");
        iwell.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var blog = document.getElementById("blog");
        blog.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var aboutus = document.getElementById("aboutus");
        aboutus.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var urbanecology = document.getElementById("urbanecology");
        urbanecology.classList.toggle(
          classes.headerstickylogo,
          window.scrollY > 0
        );
      })}
    </>

    // home
  );
};

export default Nav;
