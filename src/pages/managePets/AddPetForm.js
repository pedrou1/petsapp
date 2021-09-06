import { useRef } from 'react';
import style from './AddPetForm.module.css';

const AddPetForm = (props) => {

    const  nameRef = useRef();
    const  ageRef = useRef();
    const  categoryRef = useRef();
    const  photoRef = useRef();

    function submitHandler(event) {
        event.preventDefault(); // prevent reload

        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;
        const enteredCategory = categoryRef.current.value;
        const enteredPhoto = photoRef.current.value;

        const petData = {
            name: enteredName,
            age: enteredAge,
            category: enteredCategory,
            photo: enteredPhoto
        };

        props.onAddPet(petData);
    }

    return (
            <form className={style.form} onSubmit={submitHandler}>
                <div className={style.control}>
                    <label htmlFor="name"> Pet Name</label>
                    <input type="text" required id='name' ref={nameRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor="age"> Age</label>
                    <input type="text" required id='age' ref={ageRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor="category"> Category</label>
                    <input type="text" required id='category' ref={categoryRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor="photo"> Photo</label>
                    <input type="url" required id='photo' ref={photoRef} />
                </div>
                <div className={style.actions}>
                    <button>Add Pet</button>
                </div>
            </form>
     );
}
 
export default AddPetForm;