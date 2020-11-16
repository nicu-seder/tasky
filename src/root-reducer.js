import  {combineReducers} from "redux";

//import reducers
import userReducer from "./redux/user/user.reducer";
import taskReducer from "./redux/task/task.reducer";

const rootReducer  =  combineReducers(
    {
        user:userReducer,
        task:taskReducer
    }
);

export default rootReducer;