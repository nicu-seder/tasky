import React, {useEffect} from 'react';

//import routing
import {Switch, Route,Redirect} from "react-router-dom";

//import components
import Header from "./components/header/header.component";
import SigninPage from "./pages/signin/signin.component";

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
          <Route path={'/signin'} render={()=>currentUser?<Redirect to={'/'}/>:<SigninPage/>}/>
      </Switch>
    </div>
  );
};

export default App;
