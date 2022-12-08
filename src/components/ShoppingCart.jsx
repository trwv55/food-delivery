// import { Drawer } from "@mui/material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  list: {
    width: 450,
  },
});

const ShoppingCart = (props) => {
  const classes = useStyles();
  const { cartOpen, closeCart } = props;
  return (
    <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
      <List className={classes.list}>
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary='Корзина' />
        </ListItem>
        <Divider />
        <ListItem>Корзина пуста!</ListItem>
      </List>
    </Drawer>
  );
};

export default ShoppingCart;
