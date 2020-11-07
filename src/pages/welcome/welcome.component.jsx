import  React from 'react';

//import  styles
import {WelcomePageContainer, WelcomePageIllustration, WelcomePageInfo, WelcomePageTitle, WelcomePageLogoContainer, WelcomePageSubtitle} from "./welcome.styles";

const WelcomePage = ()=>{
    return (
        <WelcomePageContainer>
            <WelcomePageInfo>
                <WelcomePageTitle>Follow your tasks in a more structured way</WelcomePageTitle>
                <WelcomePageSubtitle>Let  go the worries about memorizing invoice, insurance,  bank loan dates. Just pass them to 'Tasky' and
                    he will take care of them for you -  You will be reminded constantly anytime a task should be completed
                </WelcomePageSubtitle>
            </WelcomePageInfo>
            <WelcomePageLogoContainer>
                <WelcomePageIllustration/>
            </WelcomePageLogoContainer>

        </WelcomePageContainer>
    )
};

export default WelcomePage;