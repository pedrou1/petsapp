import "../../bootstrap.min.css";
import { Link } from "react-router-dom";

const PetItem = (props) => {
    return ( 
<main>
        <div class="container-fluid bg-trasparent my-4 p-3">
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                
                <div class="col">
                    <div class="card h-100 shadow-sm"> <img src={props.photo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="clearfix mb-3"> </div>
                            <h5 class="card-title">{props.category}</h5>
                            Age: {props.age}
                            <div class="text-center my-4"> <Link to={`/pet/${props.id}`}><a href="#" class="btn btn-warning">Details</a></Link> </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
     );
}
 
export default PetItem;

