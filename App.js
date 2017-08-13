/**
 * Created by Nine Tailed Fox on 08/08/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {createStore, combineReducers, applyMiddleware} from 'redux'
//ban chat la 1 middleware
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import AddView from './conponents/AddView';
import TaskFlatList from './conponents/TaskFlatList';
import Counter from './conponents/Counter';

//State
//histories: mang cua gia tri number action tuong tac vao
let appState = {
    data: [
        {title: 'Chỉ còn những mùa nhớ', isFinished: true},
        {title: 'Ta còn thuộc về nhau', isFinished: false},
        {title: 'Đường một chiều', isFinished: false},
        {title: 'Vết nhơ', isFinished: false},
    ],
};


//Reducer
const taskListReducer = (state = appState, action) => {
    //state :  state cu,
    //action: dang tuong  tac vs state
    let newTaskList = state.data;
    switch (action.type) {
        case 'ADD':
            const newTask = {title: action.taskName, isFinished: false}
            return { ...state, data: [ ...state.data,newTask ] };
        case 'FINISH':
            newTaskList[action.atIndex].isFinished = true;
            return {...state, data: newTaskList};

        case 'DELETE':
            newTaskList = newTaskList.filter((item, i) => i !== action.atIndex);
            return {...state, data: newTaskList};
    }
    return state;
};

const numberReducer = (state = {number: 1}, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
            return {number: state.number + 1};
        case 'SUB_NUMBER':
            return {number: state.number - 1}
    }
    return state;
};

//Store
const store = createStore(taskListReducer, appState);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    // onAddNewTask = (taskName) => {
    //   const newTask = { title: taskName, isFinished: false }
    //   const newTaskList = [ ...this.state.data, newTask ]
    //
    //   this.setState({ data: newTaskList });
    // }
    //
    // onFinishedItem = (index) => {
    //   let newTaskList = this.state.data;
    //   newTaskList[index].isFinished = true;
    //   this.setState({ data: newTaskList });
    // }
    //
    // onDeleteItem = (index) => {
    //   let newTaskList = this.state.data.filter( (item, i) => i != index );
    //   this.setState({ data: newTaskList });
    // }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <AddView onAddNewTask={this.onAddNewTask}/>
                    <TaskFlatList />
                </View>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1F5FE'
    }
});