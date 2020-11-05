import React from 'react';

//import routing
import {Switch, Route} from "react-router-dom";

//import components
import Header from "./components/header/header.component";
import SigninPage from "./pages/signin/signin.component";

const  App = ()=> {
  return (
    <div>
      <Header/>
      <Switch>
          <Route path={'/signin'} component={SigninPage}/>
      </Switch>
    </div>
  );
};

export default App;
