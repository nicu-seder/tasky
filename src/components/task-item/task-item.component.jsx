import React from 'react';

//import actions
import {deleteTaskStart} from "../../redux/task/task.actions";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";

//import  from redux
import {useDispatch, useSelector} from "react-redux";

//import styles
import {TaskItemContainer,
    TaskItemTitle,
    TaskItemSubtitle,
    TaskItemTitleContainer,
    TaskItemLocation,
    TaskItemTimeLeft,
    TaskItemLocationLogo,
    TaskItemClockLogo, TaskItemDeleteLogo} from "./task-item.styles";


const TaskItem = ({item})=>{
    const {taskName,  taskLocation, taskDetails} =  item;
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const deleteTask = ()=>{
        dispatch(deleteTaskStart({taskName,currentUser}))
    };

    return (
        <TaskItemContainer>
            <TaskItemTitleContainer>
                <TaskItemTitle>{taskName}</TaskItemTitle>
            </TaskItemTitleContainer>
            <TaskItemSubtitle>{taskDetails}</TaskItemSubtitle>

            <TaskItemLocationLogo/>
            <TaskItemLocation>{taskLocation}</TaskItemLocation>

            <TaskItemClockLogo/>
            <TaskItemTimeLeft>2 weeks and 40 days</TaskItemTimeLeft>
            <TaskItemDeleteLogo onClick={deleteTask}/>
        </TaskItemContainer>
    )
};

export default TaskItem;