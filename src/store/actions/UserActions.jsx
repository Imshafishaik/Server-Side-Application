import { fetchUserRepo } from "../repositories/UserRepo";

import {
  getUserLoading,
  getUserData,
  getUserError,
} from "../slices/UserSlice";

export const getUserDetails = (params) => {
    return (dispatch) => {
      dispatch(getUserLoading(params));
      fetchUserRepo(params)
        .then((response) => {
          console.log("...............response", response);
          if (response) {
            dispatch(getUserData(response?.data));
          }
        })
        .catch((error) => {
          console.log("...............response 2", error);
          if (error && error.response) {
            dispatch(getUserError(error.message));
          }
        });
    };
  };