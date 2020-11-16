import React, {useState} from 'react';

//import styles
import {AddTaskContainer, AddTaskButton} from "./add-task.styles";

//import from redux
import {useSelector} from "react-redux";

//import selector
import  {selectCurrentUser} from "../../redux/user/user.selectors";

//import from firebase
import {createTask} from "../../firebase/firebase.utils";

//import  components
import FormInput from "../form-input/form-input.component";

const AddTask = ()=>{
    const [taskInfo, setTaskInfo] = useState({taskDate:'', taskName:'', taskDetails:'', taskLocation:''});
    const {taskDate, taskName, taskDetails, taskLocation} = taskInfo;
    const currentUser = useSelector(selectCurrentUser);

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setTaskInfo({...taskInfo, [name]:value});
    };

    const addNewTask = ()=>{
        createTask(currentUser, taskInfo);
    };

    return (
        <AddTaskContainer>
            <FormInput
                name={'taskDate'}
                type={'text'}
                placeholder={'Date (DD-MM-YYYY)'}
                value={taskDate}
                required
                handleChange={handleChange}/>
            <FormInput
                name={'taskName'}
                type={'text'}
                placeholder={'Title'}
                value={taskName}
                required
                handleChange={handleChange}/>
            <FormInput
                name={'taskDetails'}
                type={'text'}
                placeholder={'Subtitle'}
                value={taskDetails}
                required
                handleChange={handleChange}/>
            <FormInput
                name={'taskLocation'}
                type={'text'}
                placeholder={'Location'}
                value={taskLocation}
                required
                handleChange={handleChange}/>
            <AddTaskButton onClick={addNewTask}>Add</AddTaskButton>

        </AddTaskContainer>
    )
};

export default AddTask;