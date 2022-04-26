import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";

const api = axios.create({
  baseURL: `http://localhost:5000/user`,
});
const Form = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    username: "",
    phnumber: "",
    adrs: "",
    item: "",
  });

  const clear = () => {
    setPostData({ username: "", phnumber: "", adrs: "", item: "" });
  };

  const performpost = async () => {
    const { data } = await api.post("/", {
      username: postData.name,
      phnumber: postData.phnumber,
      adrs: postData.adrs,
      item: postData.item,
    });
    try {
      console.log(data, "post");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      postData.username,
      postData.phnumber,
      postData.adrs,
      postData.item
    );

    performpost();

    clear();
  };

  return (
    <div>
      <Paper className={classes.paper} elevation={6}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Order what you like</Typography>

          <TextField
            name="username"
            variant="outlined"
            label="Name"
            fullWidth
            value={postData.username}
            onChange={(e) =>
              setPostData({ ...postData, username: e.target.value })
            }
          />
          <TextField
            name="phnumber"
            variant="outlined"
            label="Ph Number"
            fullWidth
            value={postData.phnumber}
            onChange={(e) =>
              setPostData({ ...postData, phnumber: e.target.value })
            }
          />
          <TextField
            name="adrs"
            variant="outlined"
            label="Address"
            fullWidth
            value={postData.adrs}
            onChange={(e) =>
              setPostData({ ...postData, adrs: e.target.value.split(",") })
            }
          />
          <TextField
            name="item"
            variant="outlined"
            label="What's Your Treat"
            fullWidth
            value={postData.item}
            onChange={(e) =>
              setPostData({ ...postData, item: e.target.value.split(",") })
            }
          />

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};
export default Form;
