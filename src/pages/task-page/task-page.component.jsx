import React, {useEffect} from 'react';

//import  styles
import {TaskPageContainer,
    TaskPageWelcomeContainer,
    TaskPageWelcomeTitle,
    TaskPageWelcomeSubtitle,
    TaskPageWelcomeCurrentDate,
    TaskPageWelcomeInformation,
    TaskPageWelcomeLogo,
    TaskPageGroupContainer,
    TaskPageColumnValues, TaskPageColumnName, TaskPageHeader} from "./task-page.styles";

//import redux
import {useDispatch, useSelector} from "react-redux";

//import actions
import {fetchTasksStart, openTaskCreationWindow} from "../../redux/task/task.actions";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectTaskItems, selectTaskIsFetching, selectTaskCreationWindowStatus} from "../../redux/task/task.selectors";

//import components
import TaskGroup from "../../components/task-group/task-group.component";
import AddTask from "../../components/add-task/add-task.component";
import Spinner from "../../components/spinner/spinner.component";
import FabButton from "../../components/fab-button/fab-button.component";

//import from firebase
import {firestore} from "../../firebase/firebase.utils";

//import libraries
import moment from "moment";


const TasksPage = ()=>{

    const currentUser = useSelector(selectCurrentUser);
    const isFetching = useSelector(selectTaskIsFetching);
    const tasks =  useSelector(selectTaskItems);
    const taskCreationStatus = useSelector(selectTaskCreationWindowStatus);

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

    const openWindow = ()=>{
        dispatch(openTaskCreationWindow(true));
    };


    return (
        <TaskPageContainer>
            <TaskPageHeader>
                <TaskPageWelcomeContainer>
                    <TaskPageWelcomeInformation>
                        <TaskPageWelcomeTitle>{`Good to see you again, ${currentUser.displayName}`}</TaskPageWelcomeTitle>
                        <TaskPageWelcomeSubtitle>{'Have a fruitful day ahead!'}</TaskPageWelcomeSubtitle>
                        <TaskPageWelcomeCurrentDate>{currentDate}</TaskPageWelcomeCurrentDate>
                    </TaskPageWelcomeInformation>
                    <TaskPageWelcomeLogo/>
                </TaskPageWelcomeContainer>


            </TaskPageHeader>
            {
                taskCreationStatus?<AddTask/>:null
            }
            <TaskPageColumnValues>
                <TaskPageColumnName widthLength={50}>Date</TaskPageColumnName>
                <TaskPageColumnName marginLeft={18} marginRight={15} widthLength={100}>Category</TaskPageColumnName>
                <TaskPageColumnName widthLength={165} marginRight={15}>Details</TaskPageColumnName>
                <TaskPageColumnName marginRight={10} widthLength={100}>Location</TaskPageColumnName>
                <TaskPageColumnName marginLeft={18} widthLength={170}>Deadline</TaskPageColumnName>
            </TaskPageColumnValues>
            <TaskPageGroupContainer>
                {
                    isFetching?<Spinner/>:
                        tasks.map(task=>{
                            return <TaskGroup key={Object.keys(task)[0]} date={Object.keys(task)[0]} items={task[Object.keys(task)[0]]}/>
                        })
                }
            </TaskPageGroupContainer>
            <FabButton openTaskCreation={openWindow}/>

        </TaskPageContainer>
    )
};

export default TasksPage;