import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Link,
} from "@material-ui/core";

function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <h1>About</h1>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://media-exp1.licdn.com/dms/image/C5603AQEZO67MUP8icQ/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=KuPzW1OVkfivet4I62I3pKF0T4fUlTce8o7I8-vPXEg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Babaniyi Clement
                  </Typography>
                  <Typography>
                    Software Developer that Specialises in
                    Reactjs,Nodejs,Flutter.An Innovative Software and Mobile
                    Developer,Adept in collaborating with colleagues to ensure
                    product quality and improvements.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link
                      variant="button"
                      color="inherit"
                      href="https://www.linkedin.com/in/clement-babaniyi-59165518b/"
                    >
                      LinkedIn
                    </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link
                      variant="button"
                      color="inherit"
                      href="github.com/clembabs"
                    >
                      GitHub
                    </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link
                      variant="button"
                      color="inherit"
                      href="https://resume.io/r/ef9E6wHe2"
                    >
                      Resume
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const cards = [1];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default About;
