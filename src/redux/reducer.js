import * as types from "./actionTypes";

const initialState = {
  companies: [
    {
      "id":1,
      "company_name": "Company 1",
      "website": "xyz.com",
      "address": "zddgsadgjsd",
      "phoneNumber":"12345678",
      "email": "Emailc.com"
    }
  ],
  company: {},
  message: "",
  // loading: true,
  // showCreateUpdateWindow: false,
  // error: null,
};

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_COMPANIES:
      // case types.ADD_COMPANY:
        return{
          ...state,
          companies: action.payload,
          // loading: false,
        };
      case types.ADD_COMPANY:
      case types.DELETE_COMPANY:
      case types.UPDATE_COMPANY:
      return{
        ...state,
        message: action.payload,
        // loading: false,
      };
      case types.GET_SINGLE_COMPANY:
      return{
        ...state,
        company: action.payload,
        // loading: false,
      };
        default:
        return state;
    }
};
export default companyReducer;