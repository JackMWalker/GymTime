/**
 * 
 */

import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import styles from './style.js';
import CustomButton from '../customButton';

export default class AddEvent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: 'Useless Placeholder',
            duration: '30'
        };
    }


    render() {
        return (
        <View style={styles.container}>
            <TextInput 
                style={styles.title} 
                value={this.state.name}>
            </TextInput>
        </View>
        );
    }
}
