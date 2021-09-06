import PetItem from "./PetItem";

const PetList = (props) => {
    return ( 
        <ul>
        {
        props.pets.map(pet => 
        <PetItem 
        key={pet.id} 
        id={pet.id} 
        name={pet.name} 
        age={pet.age}
        category={pet.category}
        photo={pet.photo}
        />)
        }
    </ul>
     );
}
 
export default PetList;