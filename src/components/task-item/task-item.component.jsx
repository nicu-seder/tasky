import React, {Suspense} from 'react';

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
    TaskItemClockLogo,
    TaskItemDeleteLogo,
    TaskItemContact,
    TaskItemContactLogo,
    TaskItemHourLogo,
    TaskItemHour} from "./task-item.styles";


const TaskItem = ({item})=>{
    const {taskName,  taskLocation, taskDetails, taskColor, taskHour, taskContactPerson} =  item;
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const deleteTask = ()=>{
        dispatch(deleteTaskStart({taskName,currentUser}))
    };
    return (
        <TaskItemContainer>
            <Suspense fallback={<div>Loading...</div>}>
                <TaskItemTitleContainer borderColor={taskColor}>
                    <TaskItemTitle titleColor={taskColor}>{taskName}</TaskItemTitle>
                </TaskItemTitleContainer>

                <TaskItemSubtitle>{taskDetails}</TaskItemSubtitle>

                <TaskItemContactLogo/>
                <TaskItemContact>{taskContactPerson}</TaskItemContact>

                <TaskItemLocationLogo/>
                <TaskItemLocation>{taskLocation}</TaskItemLocation>

                <TaskItemHourLogo/>
                <TaskItemHour>{taskHour}</TaskItemHour>

                <TaskItemClockLogo/>
                <TaskItemTimeLeft>2 weeks and 40 days</TaskItemTimeLeft>

                <TaskItemDeleteLogo onClick={deleteTask}/>
            </Suspense>
        </TaskItemContainer>
    )
};

export default TaskItem;