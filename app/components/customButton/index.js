/**
 * 
 */

import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import styles from './style.js';

export default class CustomButton extends Component {
    
    // Set default props
    static defaultProps = {
        onPress: function(){},
        styles: {
            container: '',
            button: '',
            text: ''
        },
        text: ''
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
                style={[styles.container, this.props.styles.container]}>
                <View style={[styles.button, this.props.styles.button]}>
                    <Text style={[styles.text, this.props.styles.text]}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}