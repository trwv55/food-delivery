import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LogoFooter from "../static/images/logo-head.svg";
import FooterBC from "../static/images/footer-bc.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(5),
    marginTop: "auto",
    textAlign: "center",
    backgroundImage: `url(${FooterBC})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "25vh",
  },
  footerContainer: {
    maxWidth: "200px",
  },
  icon: {
    marginBottom: theme.spacing(5),
    paddingTop: theme.spacing(2),
    // backgroundColor: "red",
  },
}));

export default function Footer() {
  const classes = useStyles();

  //  <Typography variant='body2' color='textSecondary'>
  //    Ваш текст футера © {new Date().getFullYear()}
  //  </Typography>;

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2}>
        <Grid className={classes.icon} item xs={12}>
          <a href='/'>
            <img src={LogoFooter} alt='' />
          </a>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' color='textSecondary'>
            COPYRIGHT © {new Date().getFullYear()} FOODWORKS LTD.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
