import { Box, Button, Typography, styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React, { useState, useContext } from "react";
import LoginDialog from "./LoginDialog";
import { AuthContext, Dataprovider } from "../../context/DataProvider";
import Profile from "./Profile";

const LoginBox = styled(Box)({
  display: "flex",
  gap: "1rem",
  textTransform: "none",
  justifyContent: "center",
  alignItems: "center",
  color:"black"
});

const Login = () => {
  const [open, setOpen] = useState(false);
  const OpenDialog = () => {
    setOpen(true);
  };

  const { account, setAccount } = useContext(AuthContext);

  return (
    <div>
      {account ? (
        <Profile account={account} setAccount={setAccount}/>
      ) : (
        <Button
          variant="contained"
          style={{
            backgroundColor: "white",
            border: "none",
            height: "32px",
            cursor:"pointer"
          }}
          onClick={() => OpenDialog()}
        >
          <LoginBox>
            <Box>
              <AccountCircleIcon
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:"pointer"
                }}
              />
            </Box>
            <Box>
              <Typography>Login</Typography>
            </Box>
          </LoginBox>
        </Button>
      )}
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Login;
