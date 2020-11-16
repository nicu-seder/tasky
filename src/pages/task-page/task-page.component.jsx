import React, {useEffect} from 'react';

//import  styles
import {TaskPageContainer} from "./task-page.styles";

//import redux
import {useDispatch, useSelector} from "react-redux";

//import actions
import {fetchTasksStart} from "../../redux/task/task.actions";

//import selectors
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectTaskItems} from "../../redux/task/task.selectors";

//import components
import TaskGroup from "../../components/task-group/task-group.component";
import AddTask from "../../components/add-task/add-task.component";

//import from firebase
import {firestore} from "../../firebase/firebase.utils";


const TasksPage = ()=>{

    const currentUser = useSelector(selectCurrentUser);
    const tasks =  useSelector(selectTaskItems);
    const dispatch = useDispatch();

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
            <AddTask/>
                    {
                        tasks?
                        tasks.map(task=>{
                            return <TaskGroup key={Object.keys(task)[0]} date={Object.keys(task)[0]} items={task[Object.keys(task)[0]]}/>
                        }):<div>Abx</div>
                    }
        </TaskPageContainer>
    )
};

export default TasksPage;