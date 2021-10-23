import React from 'react';
import PetItem from "./PetItem";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 4),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  checkBox: {
    paddingBottom: theme.spacing(2),
  },
}));

const PetList = (props) => {
  const classes = useStyles();

  let checkboxes = [{ label: 'Canine' }, { id: 2, label: 'Feline' }]

  const [checkbox, setCheckbox] = useState(['Canine', 'Feline']);

  function handleCheck(id) {

    let found = checkbox.includes(id);

    if (found) {
      setCheckbox(
        checkbox.filter(x => x !== id)
      )
    } else {
      setCheckbox([...checkbox, id]
      )
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="initial" gutterBottom>
              PETS
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Below you can see all pets added, you can add more!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {
            checkboxes.map(chbox =>
              <FormControlLabel control={
                <Checkbox
                  label={chbox.label}
                  onChange={() => handleCheck(chbox.label)}
                  checked={checkbox.includes(chbox.label)}
                />}
                label={chbox.label}
                className={classes.checkBox} />)
          }

          <Grid container spacing={4}>
            {
              props.pets.filter(pet =>
                checkbox.length !== 2 ? pet.category.includes(checkbox.map(categ => categ)) : pet
              )
                .map(pet =>
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
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Pedro Urrutia
        </Typography>
      </footer>
      {
        console.log(checkbox)}
    </React.Fragment>
  );
}

export default PetList;