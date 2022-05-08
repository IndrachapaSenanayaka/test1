<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Appointment from './components/customer.components/appointment.components/Customer.appointment.routes';

function App() {

  return (
    <Router>
     <Route path="/appointment" component={Appointment} />
    </Router>
      
=======
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './components/staff.components/admin.components/Login';
import Admin from './components/staff.components/admin.components/Admin';







function App() {
  return (


    <Router>
      <div>
        <Switch>
          <Route path="/staff/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>

>>>>>>> 830c9445501bef9146d56e1fa820df3db7f33f28
  );
}

export default App;
