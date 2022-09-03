export function addItem(data) {
  return async dispatch => {
    dispatch({type: 'ADD_ITEM', value: data});
  };
}

export function deleteItem(data, ind) {
  return dispatch => {
    dispatch({type: 'DELETE_ITEM', value: {item: data, index: ind}});
  };
}
export function editItem(data, ind) {
  return dispatch => {
    dispatch({type: 'EDIT_ITEM', value: {item: data, index: ind}});
  };
}
