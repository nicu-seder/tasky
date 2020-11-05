import React from 'react';

//import styles
import {HeaderContainer, AppLogo, HeaderTitle, HeaderDetails, HeaderAuthentication, HeaderLogin, HeaderSignout, HeaderSignup} from "./header.styles";

//import hooks
import {useHistory} from 'react-router-dom';

const Header = ()=>{
    const history = useHistory();
    const goToSigninPage = ()=>{
        history.push('/signin')
    };

    return (
        <HeaderContainer>
            <HeaderDetails>
                <AppLogo/>
                <HeaderTitle>Tasky</HeaderTitle>
            </HeaderDetails>
            <HeaderAuthentication>
                <HeaderLogin onClick={goToSigninPage}>Login</HeaderLogin>
                <HeaderSignup>Signup</HeaderSignup>
                <HeaderSignout>Signout</HeaderSignout>
            </HeaderAuthentication>

        </HeaderContainer>
    )
};

export default Header;