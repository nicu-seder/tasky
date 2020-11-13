import React, {Fragment} from 'react';

//import styles
import {HeaderContainer, AppLogo, HeaderTitle, HeaderDetails, HeaderAuthentication, HeaderLogin, HeaderSignout, HeaderSignup} from "./header.styles";

//import hooks
import {useHistory} from 'react-router-dom';

//import redux
import  {useSelector, useDispatch} from "react-redux";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";

//import  actions
import {signOutStart} from "../../redux/user/user.actions";

const Header = ()=>{
    const disptach = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);

    const goToSigninPage = ()=>{
        history.push('/signin')
    };

    const goToSignupPage = ()=>{
        history.push('/signup');
    };

    const goToMainPage = ()=>{
        currentUser?history.push('/tasks'): history.push('/');
    };

    const signOut = ()=>{
        disptach(signOutStart())
    };

    return (
        <HeaderContainer>
            <HeaderDetails>
                <AppLogo onClick={goToMainPage}/>
                <HeaderTitle>Tasky</HeaderTitle>
            </HeaderDetails>
            <HeaderAuthentication>
                {
                    currentUser?
                        <HeaderSignout onClick={signOut}>Sign Out</HeaderSignout> :
                        <Fragment>
                            <HeaderLogin onClick={goToSigninPage}>Sign In</HeaderLogin>
                            <HeaderSignup onClick={goToSignupPage}>Sign Up</HeaderSignup>
                        </Fragment>


                }
            </HeaderAuthentication>
        </HeaderContainer>
    )
};

export default Header;