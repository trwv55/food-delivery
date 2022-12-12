import React from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  border: "1px solid rgba(53, 184, 190, 0.15)",
  borderRadius: "6px",
  padding: theme.spacing(2),
}));

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <Container>
        <div className='menu-content'>
          <h1 className='menu-title'>Browse our menu</h1>
          <p className='menu-text'>
            Use our menu to place an order online, or phone our store to place a pickup order. Fast
            and fresh food.
          </p>
          <div className='button-wrapper'>
            <Button
              variant='contained'
              sx={{ background: "#35B8BE", height: "52px", width: "147px", mt: "49px" }}>
              Burgers
            </Button>
            <Button
              variant='contained'
              sx={{ background: "#35B8BE", height: "52px", width: "147px", mt: "49px" }}>
              Sides
            </Button>
          </div>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>xs=2</Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
