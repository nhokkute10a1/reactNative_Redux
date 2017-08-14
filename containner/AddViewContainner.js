/**
 * Created by Nine Tailed Fox on 14/08/2017.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    TextInput,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import AddView from '../conponents/AddView'
import { connect } from 'react-redux'

class AddViewContainner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { onAddNewTask } = this.props;
        const onAddNewTask = this.props.onAddNewTask;
        return (
            <AddView onAddNewTask={onAddNewTask} />
        );
    }
}
//Action
const addTask = (name) => {
    return {
        type: 'ADD',
        taskName: name
    }
};

export default connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            onAddNewTask: (name) => dispatch(addTask(name))
        }
    }
)(AddViewContainner);