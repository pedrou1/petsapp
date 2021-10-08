import { useState, useEffect } from "react";
import PetList from "./PetList";
import {
  Typography,
  Container,
  Box
  } from '@material-ui/core';

const AllPets = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPets, setLoadedPets] = useState([]);
  
    useEffect(() => { // loads pets
      setIsLoading(true);
      fetch(
        'https://petsapp-e73b7-default-rtdb.firebaseio.com/pets.json'
      ).then((response) => {
          return response.json();
        }).then((data) => {
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
      <section>
        <h1>All Pets</h1>
        <PetList pets={loadedPets} />
      </section>
    );
}
 
export default AllPets;