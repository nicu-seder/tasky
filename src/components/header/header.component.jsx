import React, {Fragment} from 'react';

//import styles
import {HeaderContainer,
    AppLogo,
    HeaderTitle,
    HeaderDetails,
    HeaderAuthentication,
    HeaderLogin,
    HeaderSignout,
    HeaderSignup,
    HeaderTasksCounter,
    HeaderBellLogo, HeaderTasksReminder} from "./header.styles";

//import hooks
import {useHistory} from 'react-router-dom';

//import redux
import  {useSelector, useDispatch} from "react-redux";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectTaskItems} from "../../redux/task/task.selectors";

//import  actions
import {signOutStart} from "../../redux/user/user.actions";

//import from toolbox
import {getUrgentTasks} from "../../tool-box/tool-box";

const Header = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);
    const tasks = useSelector(selectTaskItems);

    const goToSigninPage = ()=>{
        history.push('/signin')
    };

    const goToSignupPage = ()=>{
        history.push('/signup');
    };

    const goToMainPage = ()=>{
        currentUser?history.push('/task'): history.push('/');
    };

    const signOut = ()=>{
        dispatch(signOutStart());
        history.push('/');
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
                        <Fragment>
                            {
                                tasks?
                                    <HeaderTasksReminder>
                                        {
                                            getUrgentTasks(tasks) > 0?
                                                <Fragment>
                                                    <HeaderBellLogo/>
                                                    <HeaderTasksCounter>{getUrgentTasks(tasks)}</HeaderTasksCounter>
                                                </Fragment>:null
                                        }

                                    </HeaderTasksReminder>:
                                    null
                            }
                            <HeaderSignout onClick={signOut}>Sign Out</HeaderSignout>
                        </Fragment>
                         :
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