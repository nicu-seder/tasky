import React, {useState} from 'react';

//import styles
import {AddTaskContainer, AddTaskButton, AddTaskFormElements, AddTaskHeader, AddTaskTitle, AddTaskCloseWindow} from "./add-task.styles";

//import from redux
import {useSelector, useDispatch} from "react-redux";

//import selector
import  {selectCurrentUser} from "../../redux/user/user.selectors";

//import from firebase
import {createTask} from "../../firebase/firebase.utils";

//import  components
import FormInput from "../form-input/form-input.component";

//import from toolbox
import {checkDateValidity} from "../../tool-box/tool-box";

//import actions
import {closeTaskCreationWindow} from "../../redux/task/task.actions";

const AddTask = ()=>{
    const [taskInfo, setTaskInfo] = useState({taskDate:'',
        taskName:'',
        taskDetails:'',
        taskLocation:'',
        taskContactPerson:'-',
        taskHour:'-',
        taskColor:'#4B3D84'});
    const {taskDate, taskName, taskDetails, taskLocation, taskColor, taskContactPerson, taskHour} = taskInfo;
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setTaskInfo({...taskInfo, [name]:value});
    };

    const addNewTask = ()=>{
        if(taskDate === '' || taskName === ''|| taskDetails === '' || taskLocation === '' || taskContactPerson === ''){
            alert('One or more fields are empty!');
            return;
        }
        if(checkDateValidity(taskDate)){
            createTask(currentUser, taskInfo);
            setTaskInfo({...taskInfo, taskDate:'', taskName:'', taskDetails:'', taskLocation:'',taskContactPerson: '', taskHour:'', taskColor:'#000000'});
        }
    };

    const closeWindow = ()=>{
        dispatch(closeTaskCreationWindow(false));
    };

    return (
        <AddTaskContainer>
            <AddTaskHeader>
                <AddTaskTitle>Create a task</AddTaskTitle>
                <AddTaskCloseWindow onClick={closeWindow}/>
            </AddTaskHeader>
            <AddTaskFormElements>
                <FormInput
                    name={'taskDate'}
                    type={'text'}
                    // placeholder={'Date (DD-MM-YYYY)'}
                    value={taskDate}
                    required
                    label={'Date (DD-MM-YYYY)'}
                    handleChange={handleChange}/>

                <FormInput
                    name={'taskName'}
                    type={'text'}
                    // placeholder={'Title'}
                    value={taskName}
                    required
                    label={'Task Name'}
                    handleChange={handleChange}/>

                <FormInput
                    name={'taskDetails'}
                    type={'text'}
                    // placeholder={'Subtitle'}
                    value={taskDetails}
                    required
                    label={'Task Details'}
                    handleChange={handleChange}/>

                <FormInput
                    name={'taskContactPerson'}
                    type={'text'}
                    // placeholder={'Subtitle'}
                    value={taskContactPerson}
                    required
                    label={'Contact Person'}
                    handleChange={handleChange}/>

                <FormInput
                    name={'taskLocation'}
                    type={'text'}
                    // placeholder={'Location'}
                    value={taskLocation}
                    required
                    label={'Location'}
                    handleChange={handleChange}/>

                <FormInput
                    name={'taskHour'}
                    type={'text'}
                    // placeholder={'Location'}
                    value={taskHour}
                    required
                    label={'Time'}
                    handleChange={handleChange}/>

                <FormInput
                    name={'taskColor'}
                    type={'color'}
                    // placeholder={'Location'}
                    value={taskColor}
                    required
                    label={'Task Color'}
                    handleChange={handleChange}/>
            </AddTaskFormElements>

            <AddTaskButton onClick={addNewTask}>Add</AddTaskButton>

        </AddTaskContainer>
    )
};

export default AddTask;