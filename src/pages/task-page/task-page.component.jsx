import React, {useEffect} from 'react';

//import  styles
import {TaskPageContainer,
    TaskPageWelcomeContainer,
    TaskPageWelcomeTitle,
    TaskPageWelcomeSubtitle,
    TaskPageWelcomeCurrentDate,
    TaskPageWelcomeInformation,
    TaskPageWelcomeLogo,
    TaskPageGroupContainer  } from "./task-page.styles";

//import redux
import {useDispatch, useSelector} from "react-redux";

//import actions
import {fetchTasksStart} from "../../redux/task/task.actions";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectTaskItems, selectTaskIsFetching} from "../../redux/task/task.selectors";

//import components
import TaskGroup from "../../components/task-group/task-group.component";
import AddTask from "../../components/add-task/add-task.component";
import Spinner from "../../components/spinner/spinner.component";

//import from firebase
import {firestore} from "../../firebase/firebase.utils";

//import libraries
import moment from "moment";


const TasksPage = ()=>{

    const currentUser = useSelector(selectCurrentUser);
    const isFetching = useSelector(selectTaskIsFetching);
    const tasks =  useSelector(selectTaskItems);
    const dispatch = useDispatch();
    const currentDate  = moment(new Date()).format(  "LL").toString();

    useEffect(()=>{
        if(currentUser){
            const collectionRef = firestore.collection(`tasks/${currentUser.id}/items`);
            collectionRef.onSnapshot(async snapshot=>{
                dispatch(fetchTasksStart(currentUser))
            })
        }else{
            return;
        }


    },[currentUser, dispatch]);

    return (
        <TaskPageContainer>
            <TaskPageWelcomeContainer>
                <TaskPageWelcomeInformation>
                    <TaskPageWelcomeTitle>{`Good to see you again, ${currentUser.displayName}`}</TaskPageWelcomeTitle>
                    <TaskPageWelcomeSubtitle>{'Have a fruitful day ahead!'}</TaskPageWelcomeSubtitle>
                    <TaskPageWelcomeCurrentDate>{currentDate}</TaskPageWelcomeCurrentDate>
                </TaskPageWelcomeInformation>
                <TaskPageWelcomeLogo/>
            </TaskPageWelcomeContainer>
            <AddTask/>
            <TaskPageGroupContainer>
                {
                    isFetching?<Spinner/>:
                        tasks.map(task=>{
                            return <TaskGroup key={Object.keys(task)[0]} date={Object.keys(task)[0]} items={task[Object.keys(task)[0]]}/>
                        })
                }
            </TaskPageGroupContainer>


        </TaskPageContainer>
    )
};

export default TasksPage;