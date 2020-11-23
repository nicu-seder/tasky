import {createSelector} from "reselect";

const selectTasks = state=>state.task;

export const selectTaskItems = createSelector(
    [selectTasks],
    tasksElements=>tasksElements.tasks?tasksElements.tasks:null
);

export  const selectTaskIsFetching = createSelector(
    [selectTasks],
    tasksElements=>tasksElements.isFetching
);