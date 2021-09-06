import { useParams } from "react-router-dom";

const PetDetails = () => {
    const { id } = useParams();
    return ( 
        <div  style={{marginTop: 200}}>Pet with id: {id}</div>
     );
}
 
export default PetDetails;