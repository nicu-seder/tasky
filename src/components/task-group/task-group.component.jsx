import React from 'react';

//import  styles
import {TaskGroupContainer, TaskGroupInfoContainer} from "./task-group.styles";

//import components
import TaskDate from "../task-date/task-date.component";
import TaskItem from "../task-item/task-item.component";

const TaskGroup = ()=>{
    return (
        <TaskGroupContainer>
            <TaskDate/>
            <TaskGroupInfoContainer>
                <TaskItem/>
                <TaskItem/>
            </TaskGroupInfoContainer>
        </TaskGroupContainer>
    )
};

export default TaskGroup;