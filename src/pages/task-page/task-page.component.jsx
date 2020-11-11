import React from 'react';

//import  styles
import {TaskPageContainer} from "./task-page.styles";

//import components
import TaskGroup from "../../components/task-group/task-group.component";


const TasksPage = ()=>{
    return (
        <TaskPageContainer>
            <TaskGroup/>
        </TaskPageContainer>
    )
};

export default TasksPage;