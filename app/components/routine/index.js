/**
 * 
 */

import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './style.js';

export default class Routine extends Component {
    
    static defaultProps = {
        title: '',
        duration: ''
    }

    onPress = () => {
        Navigation.push('App', {
            component: {
                name: "Timer",
                passProps: {
                    routine: this.props.routine
                },
                options: {
                    topBar: {
                        title: {
                            text: this.props.title,
                            alignment: "center"
                        },
                        visible: true,
                        drawBehind: false
                    }
                }
            }
        });
    }

    render() {
        return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={this.onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.duration}>{this.props.duration}</Text>
            </View>
        </TouchableNativeFeedback>
        );
    }
}
