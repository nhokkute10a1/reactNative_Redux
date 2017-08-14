/**
 * Created by Nine Tailed Fox on 14/08/2017.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    View
} from 'react-native';
import { connect } from 'react-redux'
import TaskFlatList from '../conponents/TaskFlatList'

class TaskListContainner extends Component {

    render() {
        const { data }= this.props.listData;
        const { onFinishedItem, onDeleteItem } = this.props;
        return(
            <TaskFlatList dataList={data} {...this.props}/>
        );
    }
}


export default connect(
    state => {
        return {
            listData: state.taskList,
            // numb: state.number
        }
    },
    dispatch => {
        return {
            onFinishedItem: (index) => dispatch(finishTask(index)),
            onDeleteItem: (index) => dispatch(deleteTask(index))
        }
    }
)(TaskListContainner);