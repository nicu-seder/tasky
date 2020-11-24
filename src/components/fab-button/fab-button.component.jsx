import React from "react";


//import styles
import {FabButtonContainer} from "./fab-button.styles";

const FabButton = ({openTaskCreation})=>{
    return (
        <FabButtonContainer onClick={openTaskCreation}>
            +
        </FabButtonContainer>
    )
};

export default FabButton;