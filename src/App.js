import './App.css';
import { Switch, Route } from "react-router-dom";
import AllPets from './pages/home/AllPets';
import AddPets from './pages/managePets/AddPet';
import PetDetails from './pages/home/PetDetails';
import NavBar from './layout/NavBar';


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <AllPets />
        </Route>
        <Route path='/manage-pets'>
          <AddPets />
        </Route>
        <Route path='/pet/:id'>
          <PetDetails />
        </Route>
      </Switch>
 </div>
  );
}

export default App;
