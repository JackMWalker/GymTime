/**
 * 
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import {leadingZeros} from '../../util/string';
import styles from './style.js';

export default class TimerClock extends Component {
    
    static defaultProps = {
        style: ''
    }
    
    render() {
        let minutes = leadingZeros(Math.floor(this.props.seconds / 60), 2);
        let seconds = leadingZeros(this.props.seconds % 60, 2);

        return (
            <Text style={[styles.timer, this.props.style]}>{minutes}:{seconds}</Text>
        );
    }
}