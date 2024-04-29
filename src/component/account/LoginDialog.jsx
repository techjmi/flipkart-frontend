import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState , useContext} from "react";
import {LoginAuthentication, UserAuthentication }from "../../service/api";
import { AuthContext } from "../../context/DataProvider";
const BoxMain = styled(Box)({
  display: "flex",
  flexDirection: "row",
  // padding:"1rem"
});
const BoxLeft = styled(Box)({
  backgroundColor: "blue",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  padding: "1rem 2rem",
});
const BoxL1 = styled(Box)({
  // marginBottom:"150px",
  color: "white",
});

const BoxRight = styled(Box)({
  backgroundColor: "#fff",
  flexDirection: "column",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
});
const BoxR1 = styled(Box)({
  // backgroundColor:"gray"
  display: "flex",
  flexDirection: "column",
  // gap:"1rem"
});
const TermTypo = styled(Typography)({
  fontWeight: "lighter",
  fontSize: "1rem",
});
const ButtonLogin = styled(Button)({
  textTransform: "none",
  backgroundColor: "#FB6410",
  color: "#fff",
  height: "48px",
  borderRadius: "2px",
  margin: "1rem 0",
});
const ButtonOTP = styled(Button)({
  textTransform: "none",
  backgroundColor: "#fff",
  color: "#2874f0",
  height: "48px",
  marginBottom: "1rem",
  borderRadius: "2px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
});
const NewTypo = styled(Typography)({
  cursor: "pointer",
  display: "flex",
  textAlign: "center",
});
const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: " Get access to your Orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "signUp",
    heading: "Seems new around here",
    subHeading: "Sign Up With Your Mobile/Email to get Started",
  },
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(initialValue.login);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };
  const toggelSignUp = () => {
    toggleAccount(initialValue.signUp);
  };
  //login and signup logic
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    number: "",
    password: "",
    email: "",
    uname: "",
  });
  const handleChange = (e) => {
    // console.log(e)
    let value = e.target.value;
    let name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const {setAccount}= useContext(AuthContext)
  // const authContext = useContext(AuthContext);

  //submission logic
  const handleSubmit = async () => {
    console.log("the user data is ", user);
    const response = await UserAuthentication(user);
    if(!response) return
    handleClose()
    setAccount(user.fname)
    console.log("The name is ", user.fname)
    setUser({
      fname: "",
      lname: "",
      number: "",
      password: "",
      email: "",
      uname: "",
    });
  };
  //login logic
  const [login, setLogin] = useState({
    email:"",
    password:""
  })
  const handleLogin= (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    setLogin({
      ...login,
      [name]: value,
    });
  }
  //submit login function
 
  const loginSubmit = async () => {
    console.log("the login data is", login);
    const response = await LoginAuthentication(login);
    console.log("Full response:", response);

    if (response.ok) {
        handleClose();
        console.log("Setting account:", response.data.data.fname);
        setAccount(response.data.data.fname);
    }
};

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <BoxMain>
          <BoxLeft>
            <BoxL1>
              <Typography
                variant="h5"
                component="h2"
                style={{ width: "150px" }}
              >
                {account.heading}
              </Typography>
              <Typography
                style={{ fontSize: "1rem", marginTop: "1rem", width: "150px" }}
              >
                {account.subHeading}
              </Typography>
            </BoxL1>
            <Box>
              <img
                src="../loginimgswift.jpg"
                alt="Loginimage"
                height="100px"
                width="150px"
                mix-blend-mode="color-burn"
              />
            </Box>
          </BoxLeft>

          <BoxRight>
            {account.view === "login" ? (
              <BoxR1>
                <TextField
                  id="standard-basic"
                  label="Enter Email"
                  variant="standard"
                  name='email'
                  value={login.email}
                  onChange={handleLogin}
                />
                <TextField
                  id="standard-basic"
                  label="Enter Your Password"
                  variant="standard"
                  name="password"
                  value={login.password}
                  onChange={handleLogin}
                />
                <TermTypo>
                  By continuing, you agree to SwiftCart's Terms of Use and
                  Privacy Policy.
                </TermTypo>
                <ButtonLogin onClick={loginSubmit}>Login</ButtonLogin>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <ButtonOTP>Request OTP</ButtonOTP>
                <Box>
                  <NewTypo onClick={toggelSignUp}>
                    New to swiftCart? Create an account
                  </NewTypo>
                </Box>
              </BoxR1>
            ) : (
              <BoxR1>
                <TextField
                  id="first-name"
                  label="Enter Your First Name"
                  variant="standard"
                  name="fname"
                  // value={user.fname}
                  onChange={handleChange}
                />

                <TextField
                  id="last-name"
                  label="Enter Your Last Name"
                  variant="standard"
                  name="lname"
                  value={user.lname}
                  onChange={handleChange}
                />
                <TextField
                  id="last-name"
                  label="Enter Your Username"
                  variant="standard"
                  name="uname"
                  value={user.uname}
                  onChange={handleChange}
                />

                <TextField
                  id="email"
                  label="Enter Your Email"
                  variant="standard"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />

                <TextField
                  id="password"
                  label="Enter Your Password"
                  type="password"
                  variant="standard"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />

                <TextField
                  id="phone"
                  type="Number"
                  label="Enter Your Phone Number"
                  variant="standard"
                  name="number"
                  value={user.number}
                  onChange={handleChange}
                />

                <ButtonLogin onClick={handleSubmit}>Sign Up</ButtonLogin>
              </BoxR1>
            )}
          </BoxRight>
        </BoxMain>
      </Dialog>
    </>
  );
};

export default LoginDialog;
