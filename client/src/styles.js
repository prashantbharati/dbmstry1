import { makeStyles } from "@material-ui/core/styles";

import segment2 from "./images/segment 2.jpg";

export default makeStyles((theme) => ({
  image: {
    // marginRight: "15px",
  },

  title: {
    fontWeight: "bold",
    color: "white",
  },
  navfirst: {
    boxSizing: "border-box",
    // marginRight: "1000px",
  },
  div1: {
    // backgroundColor: "black",
    height: "100vh",

    backgroundImage: `url('${segment2}')`,
    backgroundSize: "contain",
    backgroundRepeat: "y-repeat",
  },

  div11: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  div1text: {
    color: "white",
    // display: "flex",
    // flex: "1 1 0",
    // justifyContent: "center",
    // textAlign: "center",
    // alignItems: "center",
    // alignText: "center",
    fontWeight: "700",
    fontSize: "90px",
  },
}));
