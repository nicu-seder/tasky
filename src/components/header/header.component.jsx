import React from 'react';

//import styles
import {HeaderContainer, AppLogo, HeaderTitle, HeaderDetails} from "./header.styles";

const Header = ()=>{
    return (
        <HeaderContainer>
            <HeaderDetails>
                <AppLogo/>
                <HeaderTitle>Tasky</HeaderTitle>
            </HeaderDetails>

        </HeaderContainer>
    )
};

export default Header;