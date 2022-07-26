import { combineReducers} from "redux";
import companyReducer from './reducer'
// import Companies from './../pages/Companies/Companies';

const rootReducer = combineReducers({
    data: companyReducer
});

export default rootReducer;