import AddEditPet from './AddEditPet';
import { useStyles } from './styles.js'
import { useState, useEffect } from "react";
import {
  Button,
  CssBaseline,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
  
const ManagePets = () => {

  // Loaded pets state
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPets, setLoadedPets] = useState([]);
// Editing pets state
    const [editingItem, setEditingItem] = useState(undefined); // undefined when adding
    const [openForm, setOpenForm] = useState(false);
  
  useEffect(() => { //loads pets
    setIsLoading(true);

    fetch('https://petsapp-e73b7-default-rtdb.firebaseio.com/pets.json')
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

  
  let onDeleteItem = (inItem, i) => {
    const pets = [...loadedPets];
    pets.splice(i, 1);

    fetch(`https://petsapp-e73b7-default-rtdb.firebaseio.com/pets/${inItem.id}.json`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setLoadedPets(pets);
          alert('Success')
        }
        else {
          alert('An error has ocurred')
        }
      })
  }

let onEditItem = (inItem) => {
  setEditingItem(inItem);
  setOpenForm(true);
}

const classes = useStyles();

if (isLoading) {
  return (
    <section>
    <Box mt={15}>
     <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        LOADING...
      </Typography>
    </Container>
    </Box>
  </section>
  );
}

return (
  <>
   <CssBaseline />
  { !openForm ? ( // pet list table
  <Grid container className={classes.paper}>
    <Paper className={classes.paper}>
    <Typography component="h1" variant="h5" className={classes.topText}>
          Pet List
          </Typography>
         <Button
           onClick={() => setOpenForm(true) }
            variant="contained"
            color="primary"
            className={classes.addBtn}>
            Add Pet
          </Button>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Age</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {loadedPets.map((item, i) => {
        return (
          <TableRow key={`row-${i}`}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>
              <Button
                onClick={() => onEditItem(item)}
                color="secondary" >
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => onDeleteItem(item, i)}
                color="secondary" >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
</Paper>
</Grid>
  ) : ( // input form
    <Container component="main" maxWidth="xs">
        <Button
           onClick={() => {
            setOpenForm(false);
            setEditingItem(undefined);
           } }
            fullWidth
            variant="contained"
            color="primary"
            className={classes.backBtn} >
            Go back
          </Button>
    <AddEditPet item={editingItem} /> 
  </Container>
  )
  }
    </>
)

}

export default ManagePets;