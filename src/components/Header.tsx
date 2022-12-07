import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Logo from "../static/images/logo-head.svg";

const Header = () => {
  const navItems = ["Home", "About", "Contact"];
  return (
    <AppBar position='static' sx={{ background: "#FFFFFF" }}>
      <Toolbar>
        <a href='#'>
          <img src={Logo} alt='logo' />
        </a>
        <Typography
          variant='h6'
          component='span'
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <ul className='headerLink-list'>
            <li className='headerLink-item'>
              <a href='#'>Home</a>
            </li>
            <li className='headerLink-item'>
              <a href='#'>Order</a>
            </li>
            <li className='headerLink-item'>
              <a href='#'>Company</a>
            </li>
            <li className='headerLink-item'>
              <a href='#'>FAQ</a>
            </li>
            <li className='headerLink-item'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
