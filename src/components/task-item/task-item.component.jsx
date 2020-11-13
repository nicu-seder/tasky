import React from 'react';

//import styles
import {TaskItemContainer, TaskItemTitle, TaskItemSubtitle, TaskItemTitleContainer, TaskItemLocation, TaskItemTimeLeft, TaskItemLocationLogo, TaskItemClockLogo} from "./task-item.styles";

const TaskItem = ()=>{
    return (
        <TaskItemContainer>
            <TaskItemTitleContainer>
                <TaskItemTitle>Digital coaching 1:1</TaskItemTitle>
            </TaskItemTitleContainer>
            <TaskItemSubtitle>with Arthur R.</TaskItemSubtitle>

            <TaskItemLocationLogo/>
            <TaskItemLocation>DRPCIV Directia de permise conducere</TaskItemLocation>

            <TaskItemClockLogo/>
            <TaskItemTimeLeft>2 weeks and 40 days</TaskItemTimeLeft>
        </TaskItemContainer>
    )
};

export default TaskItem;