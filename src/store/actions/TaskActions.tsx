import {
  TADDTASK_ATTEMP,
  ADDTASK_SUCCESS,
  ADDTASK_UPDATE,
  ADDTASK_FAILURE,
  ADDTASK_ATTEMP,
} from "./../types";

export const addTask = (taskInfo) => {
  return async (dispatch) => {
    dispatch({
      type: ADDTASK_SUCCESS,
      payload: taskInfo,
    });
  };
};

export const updateTask = (taskInfo) => {
  return async (dispatch) => {
    dispatch({
      type: ADDTASK_UPDATE,
      payload: taskInfo,
    });
  };
};
