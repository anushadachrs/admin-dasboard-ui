import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger"
import reduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";
// import rootSaga from "./companiesSagas";



// const sagaMiddleware = createSagaMiddleware()

const middlewares = [reduxThunk];

if(process.env.NODE_ENV==="development"){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga);

export default store;