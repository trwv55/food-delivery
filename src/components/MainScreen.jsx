import { Button } from "@mui/material";
import React from "react";
import MainRight from "../static/images/main-right.png";
import { Container } from "@mui/system";

const MainScreen = () => {
  return (
    <div className='main-wrapper'>
      <Container>
        <div className='main-parts'>
          <div className='main-left'>
            <h2 className='main-title'>
              Beautiful food & takeaway, <span>delivered</span> to your door.
            </h2>
            <p className='main-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam excepturi
              laudantium quos nostrum assumenda quod minima possimus impedit molestiae?
            </p>
            <Button variant='contained' sx={{ background: "#35B8BE" }}>
              Place an Order
            </Button>
            <h6>Trustpilot</h6>
            <p className='main-app'>
              <span>4.8 out of 5</span> based on 2000+ reviews
            </p>
          </div>
          <div className='main-right'>
            <img src={MainRight} alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
