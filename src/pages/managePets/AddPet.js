import { useHistory } from 'react-router-dom';
import AddPetForm from '../managePets/AddPetForm';


const AddPets = () => {
    const history = useHistory();

    function addPetsHandler(petData) {
        fetch('https://petsapp-e73b7-default-rtdb.firebaseio.com/pets.json',
            {
                method: 'POST',
                body: JSON.stringify(petData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                history.replace('/');
            }

            )
            ;
    }

    return (
        <div>
            <div>New Pet</div>
            <AddPetForm onAddPet={addPetsHandler} />
        </div>
    )

}

export default AddPets;