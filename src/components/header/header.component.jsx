import React, {Fragment} from 'react';

//import styles
import {HeaderContainer, AppLogo, HeaderTitle, HeaderDetails, HeaderAuthentication, HeaderLogin, HeaderSignout, HeaderSignup} from "./header.styles";

//import hooks
import {useHistory} from 'react-router-dom';

//import redux
import  {useSelector} from "react-redux";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ()=>{
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);
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
                {
                    currentUser? <HeaderSignout>Signout</HeaderSignout> :
                        <Fragment>
                            <HeaderLogin onClick={goToSigninPage}>Login</HeaderLogin>
                            <HeaderSignup>Signup</HeaderSignup>
                        </Fragment>


                }


            </HeaderAuthentication>

        </HeaderContainer>
    )
};

export default Header;