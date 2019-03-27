/**
 * 
 */

import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import styles from './style.js';
import Routine from '../../components/routine';
import AddButton from '../../components/addButton';
import {Navigation} from 'react-native-navigation';

export default class Home extends Component {
  routine = [
    [
      {
        name: 'Plank',
        seconds: 5
      }, 
      {
        name: 'Break',
        seconds: 2
      }
    ],
    [
      {
        name: 'Push Up',
        seconds: 5
      }, 
      {
        name: 'Break',
        seconds: 2
      }
    ],
    [
      {
        name: 'Lunge',
        seconds: 5
      }, 
      {
        name: 'Break',
        seconds: 2
      }
    ]
  ]

  onPress = () => {
    Navigation.push('App', {
      component: {
          name: "CreateRoutine",
          options: {
              topBar: {
                  title: {
                      text: "Create New Routine",
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
      <View style={styles.pageContainer}>
        <View style={styles.topBanner}>
          <AddButton
            onPress={this.onPress}
            styles={{
              text: {
                fontSize: 30
              }
            }}>
          </AddButton>
        </View>
        <View style={styles.routineContainer}>
          <ScrollView contentContainerStyle={styles.routineScrollContainer}>
            <Routine 
              title='Core'
              duration='3:00'
              routine={this.routine[0]}
              />
            <Routine 
              title='Chest'
              duration='6:00'
              routine={this.routine[1]}
              />
            <Routine 
              title='Stretch'
              duration='4:00'
              routine={this.routine[2]}
              />
          </ScrollView>
        </View>
      </View>
      
    );
  }
}
