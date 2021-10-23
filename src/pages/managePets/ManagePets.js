import AddEditPet from './AddEditPet';
import { useStyles, loadingBox } from './styles.js'
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
  Typography
} from '@material-ui/core';
  
const ManagePets = () => {

  // Loaded pets state
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPets, setLoadedPets] = useState([]);
// Editing pets state
    const [editingItem, setEditingItem] = useState(undefined); // undefined when adding
    const [openForm, setOpenForm] = useState(false);
  
  useEffect(() => { //loads pets
    if(!openForm){
    setIsLoading(true);

    fetch('')
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
    }
  }, [openForm]);

  
  let onDeleteItem = (inItem, i) => {
    const pets = [...loadedPets];
    pets.splice(i, 1);

    fetch(``, {
      method: 'DELETE',
    })
      .then((res) => {
        if(window.confirm("Are you sure?")){
          if (res.status >= 200 && res.status < 300) {
            setLoadedPets(pets);
            alert('Success')
          }
          else {
            alert('An error has ocurred')
          }
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
      { loadingBox() }
    </section>
  );
}

return (
  <>
   <CssBaseline />
  { !openForm ? ( // pet list table
  <Grid data-aos="zoom-in" container className={classes.paper}>
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
    <Container data-aos="zoom-in" component="main" maxWidth="xs">
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