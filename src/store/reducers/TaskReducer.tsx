import { ADDTASK_SUCCESS, ADDTASK_UPDATE, ADDTASK_FAILURE } from "./../types";

const initialState = {
  task_list: [],
};

const task_reducer = (state = initialState, action) => {
  switch (
    action.type // action.type is a String
  ) {
    case ADDTASK_SUCCESS: // The name of the action tells what it's gonna do
      // Add any code you need here

      /* 
          This is essentially a new object with values copied from 
          state along with a new todo_list 
          return {
               ...state, 
               // new todo_list (don't forget to copy existing todo items)
          } 
        */
      return {
        ...state,
        task_list: [...state.task_list, action.payload],
      };
    case ADDTASK_UPDATE:
      /* 
          state.todo_list.filter() will return a new array
          without the elements that you specified in the condition.
        */
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
