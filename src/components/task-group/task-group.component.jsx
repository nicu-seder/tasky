import React from 'react';

//import  styles
import {TaskGroupContainer, TaskGroupVerticalDivider} from "./task-group.styles";

//import components
import TaskDate from "../task-date/task-date.component";

const TaskGroup = ()=>{
    return (
        <TaskGroupContainer>
            <TaskDate/>
            <TaskGroupVerticalDivider/>
        </TaskGroupContainer>
    )
};

export default TaskGroup;