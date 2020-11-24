import TaskActionTypes from "./task.types";

//fetching tasks
export const fetchTasksStart = (user)=>{
    return {
        type:TaskActionTypes.FETCH_TASKS_DATE_START,
        payload:user
    }
};

export const fetchTasksSuccess = (tasks)=>{
    return {
        type:TaskActionTypes.FETCH_TASKS_DATE_SUCCESS,
        payload:tasks
    }
};

export const fetchTasksFailure = (error)=>{
    return {
        type:TaskActionTypes.FETCH_TASKS_DATE_FAILURE,
        payload:error
    }
};

//deleting tasks
export const deleteTaskStart = (taskInfo)=>{
    return {
        type:TaskActionTypes.DELETE_TASK_START,
        payload:taskInfo
    }
};

export const deleteTaskSuccess = ()=>{
    return {
        type:TaskActionTypes.DELETE_TASK_SUCCESS
    }
};

export const deleteTaskFailure = (error)=>{
    return {
        type:TaskActionTypes.DELETE_TASK_FAILURE,
        payload:error
    }
};

//opening task creation window
export const openTaskCreationWindow = (status)=>{
    return {
        type:TaskActionTypes.OPEN_TASK_CREATION_WINDOW,
        payload:status
    }
};

export const closeTaskCreationWindow = (status)=>{
    return {
        type:TaskActionTypes.CLOSE_TASK_CREATION_WINDOW,
        payload:status
    }
};