import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import screenTwo from "../static/images/freshProducts.png";

const FreshProducts = () => {
  return (
    <div className='fresh-wrapper'>
      <Container>
        <div className='fresh-content'>
          <div className='fresh-left'>
            <h1 className='fresh-title'>The home of fresh products</h1>
            <p className='fresh-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500.
            </p>
            <Button
              variant='contained'
              sx={{ background: "#35B8BE", height: "60px", width: "193px", mt: "49px" }}>
              Place an Order
            </Button>
          </div>
          <div className='fresh-right'>
            <img src={screenTwo} alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FreshProducts;
