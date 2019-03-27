/**
 * 
 */

import React, {Component} from 'react';
import {Text, TouchableNativeFeedback} from 'react-native';
import styles from './style.js';

export default class CloseButton extends Component {

    // Set default props
    static defaultProps = {
        onPress: function(){},
        styles: {
            container: '',
            text: ''
        }
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
                style={[styles.container, this.props.styles.container]}>
                <Text style={[styles.text, this.props.styles.text]}>+</Text>
            </TouchableNativeFeedback>
        );
    }
}