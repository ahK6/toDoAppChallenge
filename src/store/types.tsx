export const generateDispatch = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const ADDTASK_ATTEMP = "ADDTASK_ATTEMP";
export const ADDTASK_SUCCESS = "ADDTASK_SUCCESS";
export const ADDTASK_UPDATE = "ADDTASK_UPDATE";
export const ADDTASK_FAILURE = "ADDTASK_FAILURE";
