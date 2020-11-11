import React from 'react';

//import styles
import {TaskDateContainer, TaskDateMonth, TaskDateDay} from "./task-date.styles";

const TaskDate = ()=>{
    return (
        <TaskDateContainer>
            <TaskDateMonth>Jun</TaskDateMonth>
            <TaskDateDay>23</TaskDateDay>
        </TaskDateContainer>
    )
};

export default TaskDate;