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
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
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
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma seperated)"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
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
