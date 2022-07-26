import * as types from "./actionTypes";
// import Companies from './components/Companies';
import axios from 'axios';

const API="http://localhost:3000"

const getCompanies = (companies) => ({
  type: types.GET_COMPANIES,
  payload: companies,
});

const companyAdded = (message) => ({
  type: types.ADD_COMPANY,
  payload: message
});

const companyDelete = (message) => ({
  type: types.DELETE_COMPANY,
  payload: message
});

const companyUpdate = (message) => ({
  type: types.UPDATE_COMPANY,
  payload: message
})

// export const loadCompanies = () => {
//     return function (dispatch){
//       axios
//       .get(`${process.env.REACT_APP_API}`)
//       .then((resp) => {
//         console.log("resp", resp);
//             dispatch(getCompanies(resp.data));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

  export const loadCompanies = () => {
    return function (dispatch){
      axios
      .get(`${API}/companies`)
      .then((resp) => dispatch(getCompanies(resp.data)))
      .catch((error) => console.log(error));
    };
  };

export const addCompany = (company) =>{
    return function (dispatch) {
        axios
        .post(`${API}/companies`, company)
        .then((resp) => {
          dispatch(companyAdded(resp.data.message));
          dispatch(loadCompanies());
        })
        .catch((error) => console.log(error));
    };
};

export const deleteCompany = (id) =>{
  return function (dispatch) {
      axios
      .delete(`${API}/companies/${id}`)
      .then((resp) => {
        dispatch(companyDelete(resp.data.message));
        dispatch(loadCompanies());
      })
      .catch((error) => console.log(error));
  };
};

export const loadSingleCompany = (id) =>{
  return function (dispatch) {
      axios
      .get(`${API}/company/${id}`)
      .then((resp) => {
        dispatch(companyAdded(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateCompany = (company, id) =>{
  return function (dispatch) {
      axios
      .put(`${API}/companies/${id}`, company)
      .then((resp) => {
        dispatch(companyUpdate(resp.data.message));
        dispatch(loadCompanies());
      })
      .catch((error) => console.log(error));
  };
};

// export const setShowHideCompanyWindow = show => ({
//   type: actionTypes.SET_SHOW_HIDE_COMPANY_WINDOW,
//   show,
// })
