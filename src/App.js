import React from "react";
import {Switch, Route} from "react-router-dom";
import AddUser from "./pages/AddUser";
import Home from './pages/Home';
import EditUser from "./pages/EditUser";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/addUser" component={AddUser} />
      <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>      
    </div>
  );
}

export default App;
