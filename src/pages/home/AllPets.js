import { useState, useEffect } from "react";
import PetList from "./PetList";

const AllPets = () => {
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
  
    return (
      <section>
        <h1>All Pets</h1>
        <PetList pets={loadedPets} />
      </section>
    );
}
 
export default AllPets;