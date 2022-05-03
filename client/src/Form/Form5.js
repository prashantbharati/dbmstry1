import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:5000/user/payment`,
});
const Form = ({ oid, setoid }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    username: "",
    phnumber: "",
    amount: 0,
    item: "",
  });

  const clear = () => {
    setPostData({ username: "", phnumber: "", amount: 0, item: "" });
  };

  const performpost = async () => {
    const { data } = await api.post("/", {
      username: postData.username,
      phnumber: postData.phnumber,
      amount: postData.amount,
      item: postData.item,
    });
    try {
      console.log(data.ans, "post");
      setoid(data.ans + 30);
      console.log(oid, "oid");
      navigate("/endpage4");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      postData.username,
      postData.phnumber,
      postData.amount,
      postData.item
    );

    performpost();

    // clear();
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
          <Typography variant="h6">Check Payment</Typography>

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
            name="item"
            variant="outlined"
            label="What was your order"
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
            Check Payment
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
