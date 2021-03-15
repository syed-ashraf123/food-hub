import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { Redirect } from "react-router";
import validator from "validator";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://FoodHub.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, registerStatus] = useState();
  const [success, setSuccess] = useState(false);

  const validateEmail = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      register(e);
    } else {
      registerStatus("Enter valid Email!");
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      Axios.post("http://localhost:5000/api/user/register", {
        name: userName,
        email: email,
        password: password,
      })
        .then((response) => {
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error.response.data.msg);
          if (
            error.response.data.msg ===
            '"name" length must be at least 6 characters long'
          ) {
            registerStatus("Name length must be of 6 Characters long");
          }

          if (error.response.data.msg === '"name" is not allowed to be empty') {
            registerStatus("Name Field Cannot be empty");
          }

          if (
            error.response.data.msg ===
            '"email" length must be at least 6 characters long'
          ) {
            registerStatus("Email length must be of 6 Characters long");
          }

          if (
            error.response.data.msg === '"email" is not allowed to be empty'
          ) {
            registerStatus("Email Field Cannot be empty");
          }

          if (error.response.data.msg === "email exists") {
            registerStatus("Email already exists");
          }

          if (
            error.response.data.msg ===
            '"password" length must be at least 6 characters long'
          ) {
            registerStatus("Password length must be of 6 Characters long");
          }

          if (
            error.response.data.msg === '"password" is not allowed to be empty'
          ) {
            registerStatus("Password Field Cannot be empty");
          }
        });
    } catch (error) {
      console.log(error.reponse);
    }
  };

  return (
    <>
      {success ? <Redirect to="/restaurant" /> : null}

      <div className={classes.root}>
        {status ? <Alert severity="error">{status}</Alert> : null}
      </div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={validateEmail}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
