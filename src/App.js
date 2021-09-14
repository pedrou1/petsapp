import './App.css';
import { Switch, Route } from "react-router-dom";
import PetList from './pages/home/PetList';
import AddPets from './pages/managePets/AddPet';
import PetDetails from './pages/home/PetDetails';
import NavBar from './layout/NavBar';


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <PetList />
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
