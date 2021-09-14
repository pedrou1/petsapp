import React from 'react';
import { useState, useEffect } from "react";
import PetItem from "./PetItem";
import {
CssBaseline,
Grid,
Typography,
Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 4),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const PetList = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPets, setLoadedPets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://petsapp-e73b7-default-rtdb.firebaseio.com/pets.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pets = [];

        for (const key in data) {
          const pet = {
            id: key,
            ...data[key]
          };

          pets.push(pet);
        }

        setIsLoading(false);
        setLoadedPets(pets);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }
  //positionFixed in navbar
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              PETS
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Below you can see all pets added, you can add more!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              loadedPets.map(pet =>
                <PetItem
                  key={pet.id}
                  id={pet.id}
                  name={pet.name}
                  age={pet.age}
                  category={pet.category}
                  photo={pet.photo}
                />
              )
            }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Example.
        </Typography>
      </footer>
    </React.Fragment>
  );
}

export default PetList;