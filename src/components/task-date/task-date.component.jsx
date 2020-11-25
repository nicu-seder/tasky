import React from 'react';

//import styles
import {TaskDateContainer, TaskDateMonth, TaskDateDay, TaskDateToday} from "./task-date.styles";

//import from toolbox
import {monthMatching, checkIfToday} from "../../tool-box/tool-box";


const TaskDate = ({date})=>{
    const  dateSplit = date.split('-');
    const month = dateSplit[1];
    const day = dateSplit[0];
    return (
        <TaskDateContainer>
            <TaskDateMonth isToday={checkIfToday(date)}>{monthMatching[month]}</TaskDateMonth>
            <TaskDateDay isToday={checkIfToday(date)}>{day}</TaskDateDay>
            {
                checkIfToday(date)?<TaskDateToday isToday={checkIfToday(date)}>Today</TaskDateToday>:null
            }
        </TaskDateContainer>
    )
};

export default TaskDate;