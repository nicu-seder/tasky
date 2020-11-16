import React from "react";

//Import styles
import {ErrorImageText, ErrorImageContainer, ErrorContainer} from "./error-boundart.styles";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrored:false
        }
    }

    static getDerivedStateFromError(error){
        return {hasErrored: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored){
            return <ErrorContainer>
                <ErrorImageContainer imageUrl={'https://i.imgur.com/DWO5Hzg.png'}/>
                <ErrorImageText>Oooops! Something is wrong</ErrorImageText>
            </ErrorContainer>
        }
        return this.props.children
    }

}

export default ErrorBoundary;