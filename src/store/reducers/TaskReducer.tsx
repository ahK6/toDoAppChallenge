import { ADDTASK_SUCCESS, ADDTASK_UPDATE, ADDTASK_FAILURE } from "./../types";

const initialState = {
  task_list: [],
};

const task_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK_SUCCESS:
      return {
        ...state,
        task_list: [action.payload, ...state.task_list],
      };
    case ADDTASK_UPDATE:
      return {
        ...state,
        task_list: state.task_list.map((content, i) =>
          content.id === action.payload.id
            ? { ...content, completed: action.payload.completed }
            : content
        ),
      };
    default:
      return state;
  }
};

export default task_reducer;
