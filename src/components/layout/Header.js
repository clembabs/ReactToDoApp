import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  CssBaseline,
  Container,
  Link,
  Button,
} from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Todo
          </Typography>
          <nav>
            <Link
              variant="button"
              color="inherit"
              href="home"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="inherit"
              href="about"
              className={classes.link}
            >
              About
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Todo App
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              An App to keep track of your chores
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
    //    <header style={headerStyle}>
    //    <h1>TodoList</h1>
    //    <Link style={linkStyle} to ="/">Home </Link> |
    //    <Link style={linkStyle} to ="/about"> About</Link>
    //    </header>
  );
};

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default Header;
