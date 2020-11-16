import React from 'react';

//import  styles
import {TaskGroupContainer, TaskGroupInfoContainer} from "./task-group.styles";

//import components
import TaskDate from "../task-date/task-date.component";
import TaskItem from "../task-item/task-item.component";

const TaskGroup = ({date, items})=>{
    return (
        <TaskGroupContainer>
            <TaskDate date={date}/>
            <TaskGroupInfoContainer>
                {
                    items.map(item=>{
                        return <TaskItem key={item.taskName} item={item}/>
                    })
                }
            </TaskGroupInfoContainer>
        </TaskGroupContainer>
    )
};

export default TaskGroup;