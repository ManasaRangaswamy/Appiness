import React from 'react';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom"
import './App.css';

import Login from "./components/login/login"
import Dashboard from "./components/dashboard/dashboard";
import { Provider } from 'react-redux';

import store from "./store/store";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Provider store={store}>
      <div className="App">
     <Router>
       <Switch>
         <Route path='/' component={Login} exact />
         <Route path="/dashboard" component={Dashboard} />
       </Switch>
     </Router>
     
    </div>
   </Provider>
  );
}

export default App;
