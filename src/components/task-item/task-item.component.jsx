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
    TaskItemHour,
    TaskItemReminderLogo, TaskItemCompletedLogo, TaskItemUncompletedLogo} from "./task-item.styles";

//import from toolbox
import {getDateDifference,  checkIfToday} from "../../tool-box/tool-box";

//import from firebase
import {completeTask} from "../../firebase/firebase.utils";


const TaskItem = ({item})=>{
    const {taskName,  taskLocation, taskDetails, taskColor, taskHour, taskContactPerson, taskDate, taskCompleted} =  item;
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
                <TaskItemTimeLeft>{getDateDifference(taskDate) === 0?'Today':`${getDateDifference(taskDate)} days left until deadline`}</TaskItemTimeLeft>
                {
                    taskCompleted?<TaskItemCompletedLogo/>:<TaskItemUncompletedLogo onClick={()=>completeTask(currentUser, taskName)}/>
                }

                {
                    checkIfToday(taskDate)?<TaskItemReminderLogo/>:null
                }
                <TaskItemDeleteLogo onClick={deleteTask}/>

            </Suspense>
        </TaskItemContainer>
    )
};

export default TaskItem;