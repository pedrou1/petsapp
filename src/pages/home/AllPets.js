import { useState, useEffect } from "react";
import PetList from "./PetList";
import { loadingBox } from '../managePets/styles.js';

const AllPets = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPets, setLoadedPets] = useState([]);
  
    useEffect(() => { // loads pets
      setIsLoading(true);
      fetch(
        ''
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
          { loadingBox() }
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