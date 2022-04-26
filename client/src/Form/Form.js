import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";
const Form = () => {
  const classes = useStyles();

  const clear = () => {
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    clear();
  };

  const [postData, setPostData] = useState({
    name: "",
    phnumber: "",
    adrs: "",
    item: "",
  });
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
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
          <TextField
            name="phnumber"
            variant="outlined"
            label="Ph Number"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, phnumber: e.target.value })
            }
          />
          <TextField
            name="adrs"
            variant="outlined"
            label="Address"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, adrs: e.target.value.split(",") })
            }
          />
          <TextField
            name="item"
            variant="outlined"
            label="What's Your Treat"
            fullWidth
            value={postData.tags}
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
