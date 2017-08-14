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
import AddViewContainner from './containner/AddViewContainner';
import TaskListContainner from './containner/TaskListContainner';
import CouterContainner from './containner/CouterContainner';

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
const store = createStore(
    combineReducers({
        number: numberReducer,
        taskList: taskListReducer
    }),
);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <AddViewContainner/>
                    <CouterContainner/>
                    <TaskListContainner />
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