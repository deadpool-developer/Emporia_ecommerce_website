import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";
/*import {auth} from "./firebase"*/;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = () => {
    const history = useHistory();
    const[email , setEmail]=useState("");
    const[password ,setPassword]=useState("");

    const signIn=(e)=>
    {
        e.preventDefault();
    }

    const register=(e)=>
    {
        e.preventDefault();
       /* auth
            .createUserWithEmailAndPassword(email , password)
            .then((auth)=>
            {
                if(auth)
                {
                    history.push('/');
                }

            })

            .catch(error=> alert(error.message))*/
    }

  const classes = useStyles();
  return (
    <>
      <div className="Login">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png"
          alt=""
          className="login_Logo"
        />
      </div>

      <div className="Login_div">
        <h4 style={{ textAlign: "center", fontWeight: "bold" }}>Sign-in</h4>

        <TextField
         
         id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          style={{
            width: "100%",
            marginTop:"10px"}}

            onChange={e=>setEmail(e.target.value)}

          />

        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="black"
          value={password}
          style={{ width: "100%",marginTop:"-10px" }}
          onChange={e=>setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={signIn}
          style={{
            backgroundColor: "#cd9042",
            width: "100%",
            height: "30px",
            marginTop: "10px",
            fontWeight: "500",
            fontSize: "15px",
            borderRadius: "0px",
            display: "block",
          }}
        >
          SIGN IN
        </Button>

        <p className="login_para">
          By signing-in, you agree to our terms and conditions of Use & Sale.
          Please see our Privacy Notice, our cookies Notice and our
          interest-Based Ads Notice
        </p>

        <Button
          variant="outlined"
          onClick={register}
          style={{
            width: "100%",
            height: "30px",
            color: "#cd9042",
            fontWeight: "500",
            fontSize: "15px",
            borderRadius: "0px",
            display: "block",
          }}
        >
          Sign Up
        </Button>
      </div>
    </>
  );
};
export default Login;
