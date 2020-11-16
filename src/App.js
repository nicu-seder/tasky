import React, {useEffect} from 'react';

//import routing
import {Switch, Route,Redirect} from "react-router-dom";

//import components
import Header from "./components/header/header.component";
import SigninPage from "./pages/signin/signin.component";
import SignupPage from "./pages/signup/signup.component";
import WelcomePage from "./pages/welcome/welcome.component";
import TasksPage from "./pages/task-page/task-page.component";

//import redux
import {useDispatch, useSelector} from "react-redux";

//import actions
import  {checkUserSession} from "./redux/user/user.actions";

//import selectors
import {selectCurrentUser} from "./redux/user/user.selectors";

const  App = ()=> {
    const  dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(()=>{
        dispatch(checkUserSession());
    },[dispatch]);

  return (
    <div>
      <Header/>
      <Switch>
          {
              currentUser?<Route path={'/task'} component={TasksPage}/>:
                  <Route exact path={'/'} component={WelcomePage}/>
          }
          <Route path={'/signin'} render={()=>currentUser?<Redirect to={'/task'}/>:<SigninPage/>}/>
          <Route path={'/signup'} render={()=>currentUser?<Redirect to={'/task'}/>:<SignupPage/>}/>

      </Switch>
    </div>
  );
};

export default App;
