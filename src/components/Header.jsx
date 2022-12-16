import React from "react";
import { AppBar, Toolbar, Badge } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../static/images/logo-head.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    navlinks: {
      display: "flex",
      marginLeft: theme.spacing(95),
      marginRight: theme.spacing(10),
    },
    links: {
      color: "#28224B",
      fontSize: "17px",
      justifyContent: "flex-end",
      marginLeft: theme.spacing(10),

      "&:hover": {
        color: "#35B8BE",
        borderBottom: "1px solid white",
      },
    },
    logo: {
      // flexGrow: "1",
      cursor: "pointer",
      marginLeft: theme.spacing(10),
    },
    shopCart: {
      marginLeft: theme.spacing(5),
      cursor: "pointer",
    },
  }),
);

const Header = ({ handleCart }) => {
  const classes = useStyles();
  return (
    <AppBar className='header-wrapper' position='static' sx={{ background: "#ffffff" }}>
      <Toolbar>
        <a href='/' className={classes.logo}>
          <img src={Logo} alt='logo' />
        </a>
        <div className={classes.navlinks}>
          <a href='/' className={classes.links}>
            Home
          </a>
          <a href='/' className={classes.links}>
            Menu
          </a>
          <a href='/' className={classes.links}>
            Company
          </a>
          <a href='/' className={classes.links}>
            Contacts
          </a>
          <Badge color='success' badgeContent={4} sx={{ mr: "35px" }}>
            <ShoppingCartIcon onClick={handleCart} color='action' className={classes.shopCart} />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
