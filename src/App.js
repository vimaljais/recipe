import { GlobalStyles } from "./styles/globalStyles";
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import DeleteRecipe from "./pages/DeleteRecipe";
import ShoppingList from "./pages/ShoppingList";
import Navbar from "./components/Navbar/Navbar";
import  { useState } from "react";
import Sidebar from "./components/Navbar/SideBar";
import Recipe from "./pages/Recipe";

function App() {
  const [isOpen, setisOpen] = useState(false)
  const onToggle=()=>{
    setisOpen(!isOpen)
  }

  
  return (
    <>
      <GlobalStyles/>
      <Router>
      <Navbar onToggle={onToggle}/>
      <Sidebar onToggle={onToggle} isOpen={isOpen}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/create-recipe" component={CreateRecipe}/>
          <Route  path="/edit-recipe" component={EditRecipe}/>
          <Route  path="/delete-recipe" component={DeleteRecipe}/>
          <Route  path="/shopping-list" component={ShoppingList}/>
          <Route path="/recipes/:id" component={Recipe}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
