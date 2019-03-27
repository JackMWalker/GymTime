/**
 * 
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style.js';
import AddEvent from '../../components/addEvent/index.js';

export default class CreateRoutine extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AddEvent></AddEvent>
      </View>
    );
  }
}
