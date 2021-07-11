import { ADDTASK_SUCCESS, ADDTASK_UPDATE } from "./../types";

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
