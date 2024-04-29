import { Avatar, Box, Button, Menu, MenuItem, Stack, Typography, styled } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React, { useState } from 'react'
const MenuStyled= styled(Menu)({
    marginTop:"1rem",
  marginRight:"1rem"
})
const MenuItemStyled= styled(MenuItem)({
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
})
const Logout= styled(Typography)({
    marginLeft:".5rem"
})
const Profile = ({account, setAccount}) => {
    const[open, setOpen] = useState(false)

    const handleClick= (e)=>{
setOpen(e.currentTarget)
    }
    const handleClose= ()=>{
        setOpen(false)
    }
    const Logoutuser= ()=>{
        setAccount("")
    }
  return (
    <>
    <Box onClick={handleClick} style={{ cursor:"pointer"}}>
    {/* <Stack direction="row" spacing={2}>
      <Avatar alt={account} src="/static/images/avatar/3.jpg" />
    </Stack> */}
    <Typography>{account}</Typography>
    </Box>
    <MenuStyled
      
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItemStyled onClick={handleClose}>Profile</MenuItemStyled>
       
        <MenuItemStyled onClick={() => { Logoutuser(); handleClose(); }}>
  <PowerSettingsNewIcon color='primary'/>
  <Logout>logout</Logout>
</MenuItemStyled>

      </MenuStyled>
    </>
   
  )
}

export default Profile