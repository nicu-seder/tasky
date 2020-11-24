import React, {useState} from 'react';

//import styles
import {AddTaskContainer, AddTaskButton, AddTaskElement, AddTaskElementTitle} from "./add-task.styles";

//import from redux
import {useSelector} from "react-redux";

//import selector
import  {selectCurrentUser} from "../../redux/user/user.selectors";

//import from firebase
import {createTask} from "../../firebase/firebase.utils";

//import  components
import FormInput from "../form-input/form-input.component";

//import from toolbox
import {checkDateValidity} from "../../tool-box/tool-box";

const AddTask = ()=>{
    const [taskInfo, setTaskInfo] = useState({taskDate:'', taskName:'', taskDetails:'', taskLocation:'', taskColor:'#000000'});
    const {taskDate, taskName, taskDetails, taskLocation, taskColor} = taskInfo;
    const currentUser = useSelector(selectCurrentUser);

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setTaskInfo({...taskInfo, [name]:value});
    };

    const addNewTask = ()=>{
        if(taskDate === '' || taskName === ''|| taskDetails === '' || taskLocation === ''){
            alert('One or more fields are empty!');
            return;
        }
        if(checkDateValidity(taskDate)){
            createTask(currentUser, taskInfo);
            setTaskInfo({...taskInfo, taskDate:'', taskName:'', taskDetails:'', taskLocation:'', taskColor:'#000000'});
        }
    };

    return (
        <AddTaskContainer>
            <AddTaskElement>
                <AddTaskElementTitle>Date</AddTaskElementTitle>
                <FormInput
                    name={'taskDate'}
                    type={'text'}
                    // placeholder={'Date (DD-MM-YYYY)'}
                    value={taskDate}
                    required
                    // label={'Date (DD-MM-YYYY)'}
                    handleChange={handleChange}/>
            </AddTaskElement>
            <AddTaskElement>
                <AddTaskElementTitle>Task Name</AddTaskElementTitle>
                <FormInput
                    name={'taskName'}
                    type={'text'}
                    // placeholder={'Title'}
                    value={taskName}
                    required
                    // label={'Task Name'}
                    handleChange={handleChange}/>
            </AddTaskElement>

            <AddTaskElement>
                <AddTaskElementTitle>Details</AddTaskElementTitle>
                <FormInput
                    name={'taskDetails'}
                    type={'text'}
                    // placeholder={'Subtitle'}
                    value={taskDetails}
                    required
                    // label={'Task Details'}
                    handleChange={handleChange}/>
            </AddTaskElement>

            <AddTaskElement>
                <AddTaskElementTitle>Location</AddTaskElementTitle>
                <FormInput
                    name={'taskLocation'}
                    type={'text'}
                    // placeholder={'Location'}
                    value={taskLocation}
                    required
                    // label={'Location'}
                    handleChange={handleChange}/>
            </AddTaskElement>

            <AddTaskElement>
                <AddTaskElementTitle>Task color</AddTaskElementTitle>
                <FormInput
                    name={'taskColor'}
                    type={'color'}
                    // placeholder={'Location'}
                    value={taskColor}
                    required
                    // label={'Task Color'}
                    handleChange={handleChange}/>
            </AddTaskElement>

            <AddTaskButton onClick={addNewTask}>Add</AddTaskButton>

        </AddTaskContainer>
    )
};

export default AddTask;