/**
 * Created by Nine Tailed Fox on 08/08/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';
import { connect }  from 'react-redux'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { number : props.number }
    }

    render() {
        const { number, addNumber, subNumber } = this.props.number;
        return (
            <View style={ styles.counterView } >
                <Button onPress={ () => subNumber( number - 1 ) } title="Sub" />
                <Text>Counter: { number }</Text>
                <Button onPress={ () => subNumber( number + 1 ) } title="Add" />

            </View>
        );
    }
}


Counter.defaultProps = {
    number : 1
}


const styles = StyleSheet.create({
    counterView : {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default connect(
    state => {
        return {
            // khi thay doi state producer se ko truyen lai thay vào do
            // minh se su dung container
            listData: state.taskListReducer
        }
    },
    dispatch => {
        return {

        }
    }
)(Counter);