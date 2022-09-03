const initialState = {
  toDoList: [],
};

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        toDoList: action.value,
      };
    }
    case 'EDIT_ITEM': {
      state.toDoList.splice(action.value.index, 1, action.value.item);
      return {
        ...state,
        toDoList: state.toDoList,
      };
    }
    case 'DELETE_ITEM': {
      const arr = state.toDoList.filter((item, id) => {
        if (id !== action.value.index) {
          return item;
        }
      });
      console.log('arr??', arr);
      return {
        ...state,
        toDoList: arr,
      };
    }

    default:
      return state;
  }
};

export default ToDoReducer;
