import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";
import Local from "../static/images/local.png";
import LocalBc from "../static/images/local-bc.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  left: {
    height: "500px",
    backgroundImage: `url(${Local})`,
    backgroundPosition: "center",
    backgroundSize: "content",
    backgroundRepeat: "no-repeat",
  },

  right: {
    height: "500px",
    backgroundImage: `url(${LocalBc})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: theme.spacing(2),
    justify: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
  },
  title: {
    color: "#ffffff",
    // paddingTop: theme.spacing(18),
  },
}));

const LocalFood = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6}>
            <Box className={classes.left} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.right}>
              <Typography variant='h4' className={classes.title}>
                Support good food and local business.
              </Typography>
              <Button
                variant='contained'
                sx={{
                  background: "#ffffff",
                  color: "#35B8BE",
                  height: "60px",
                  width: "162px",
                  mt: "49px",
                }}>
                Place an Order
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LocalFood;
