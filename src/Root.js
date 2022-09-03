import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Dimen from './common/Dimen';
import {useDispatch, useSelector} from 'react-redux';
import * as todoAction from './redux/action/todoAction';

let editIndex = null;
export default function Root() {
  const [val, setVal] = useState('');
  const [itemAction, setItemAction] = useState('Add');

  const toDoListRes = useSelector(state => state.ToDoReducer.toDoList);
  const dispatch = useDispatch();

  const handleInput = value => {
    setVal(value);
  };
  const submit = () => {
    if (itemAction === 'Add') {
      let addedList = [...toDoListRes, val];
      dispatch(todoAction.addItem(addedList));
    } else if (itemAction === 'edit') {
      dispatch(todoAction.editItem(val, editIndex));
      editIndex = null;
      setItemAction('Add');
    }

    setVal('');
  };
  const deleteItem = (itemVal, ids) => {
    dispatch(todoAction.deleteItem(itemVal, ids));
  };
  const editItem = (itemVal, ids) => {
    setItemAction('edit');
    editIndex = ids;
    setVal(itemVal);
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.listWrap}>
        <Text>{item}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={[styles.txt1, {paddingHorizontal: 20, color: 'red'}]}
            onPress={() => deleteItem(item, index)}>
            DELETE
          </Text>
          <Text style={styles.txt1} onPress={() => editItem(item, index)}>
            EDIT
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputBtnWrap}>
        <TextInput
          style={styles.input}
          value={val}
          onChangeText={val => handleInput(val)}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={submit}
          disabled={val == ''}>
          <Text style={styles.txt}>{itemAction}</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={toDoListRes} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flext: 1,
    margin: Dimen.phoneHeight * 0.1,
  },
  input: {
    borderWidth: 1,
    width: Dimen.phoneWidth * 0.5,
    padding: 8,
    borderRadius: 8,
  },
  btn: {
    borderWidth: 1,
    backgroundColor: 'orange',
    borderRadius: 8,
    justifyContent: 'center',
    width: 50,
  },
  inputBtnWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Dimen.phoneHeight * 0.02,
  },
  txt: {
    color: 'white',
    alignSelf: 'center',
  },
  listWrap: {
    marginVertical: Dimen.phoneHeight * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {paddingHorizontal: 20, color: 'green'},
});
