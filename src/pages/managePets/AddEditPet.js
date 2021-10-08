import { useHistory } from 'react-router-dom';
import AddPetForm from './AddEditPetForm';


const AddPet = (props) => {
    const history = useHistory();


    function addPetHandler(petData) {
        fetch('https://petsapp-e73b7-default-rtdb.firebaseio.com/pets.json',
            {
                method: 'POST',
                body: JSON.stringify(petData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    alert('Success');
                    history.replace('/');
                }
            }
            );
    }

    function updatePetHandler(petData) {
        fetch(`https://petsapp-e73b7-default-rtdb.firebaseio.com/pets/${petData.id}.json`, {
            method: "PATCH",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(petData),
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                alert('Success');
            }
        }
        );
    }


    return (
        <div>
            <AddPetForm
                onAddPet={addPetHandler} onEditPet={updatePetHandler}
                item={props.item}
            />
        </div>
    )

}

export default AddPet;