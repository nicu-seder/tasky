import React from 'react';

//import styles
import {TaskDateContainer, TaskDateMonth, TaskDateDay} from "./task-date.styles";

//import from toolbox
import {monthMatching} from "../../tool-box/tool-box";

const TaskDate = ({date})=>{
    const  dateSplit = date.split('-');
    const month = dateSplit[1];
    const day = dateSplit[0];
    return (
        <TaskDateContainer>
            <TaskDateMonth>{monthMatching[month]}</TaskDateMonth>
            <TaskDateDay>{day}</TaskDateDay>
        </TaskDateContainer>
    )
};

export default TaskDate;