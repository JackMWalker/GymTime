/**
 * 
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import TimerClock from '../../components/timerClock';
import CustomButton from '../../components/customButton';
import CloseButton from '../../components/closeButton';
import styles from './style.js';

export default class Timer extends Component {

  constructor(props) {
    super(props);

    // Routine
    this.routine = props.routine;
    this.timer = null;
    this.currentIndex = 0;
    this.state = {
      currentName: this.routine[0].name,
      currentSeconds: this.routine[0].seconds,
      isPlaying: false
    };
  }

  // Move to the next routine
  nextExercise = () => {
    if(this.currentIndex < this.routine.length - 1) {
      this.currentIndex++;
      this.updateRoutine();
    } 
    else {
      this.endTimer();
    }
  }

  // reset the routine
  resetRoutine = () => {
    this.currentIndex = 0;
    this.updateRoutine();
  }

  // update state of current exercise name and seconds remaining
  updateRoutine = () => {
    let currentRoutine = this.routine[this.currentIndex];

    this.setState(() => ({
      currentName: currentRoutine.name,
      currentSeconds: currentRoutine.seconds
    }));
  }

  // Button press handler
  startButtonPress = () => {
    // set isPlaying to the opposite state
    this.setState(({ isPlaying }) => ({
      isPlaying: !isPlaying
    }));

    // start or end timer appropriately 
    if(!this.state.isPlaying && this.state.currentSeconds > 0) {
      this.startTimer();
    }
    else {
      this.endTimer();
    }
  }

  resetButtonPress = () => {
    // End the timer and then reset the routine
    this.endTimer();
    this.resetRoutine();
  }

  //  Start the timer running
  startTimer = () => {
    this.timer = setInterval(() => {
      // if there is still time remaining, less 1 second
      if(this.state.currentSeconds > 0) {
        this.setState(({ currentSeconds }) => ({
          currentSeconds: --currentSeconds
        }));
      } 
      else {
        // if no seconds left, move onto the next exercise in the routine
        this.nextExercise();
      }
      // timer every 1000ms = 1 second
    }, 1000);
  }

  // clear the timer and set isPlaying to false
  endTimer = () => {
    clearInterval(this.timer);
    this.setState(({ isPlaying }) => ({
      isPlaying: false
    }));
  }


  // Render
  render() {
    return (
      <View style={styles.pageContainer}>

        <View style={styles.bodyContainer}>
          <Text style={styles.exerciseNameText}>{this.state.currentName}</Text>
          <TimerClock seconds={this.state.currentSeconds} style={styles.timerClock} />

          <View style={styles.buttonContainer}>
            <CustomButton 
              text={"Reset"} 
              onPress={this.resetButtonPress}
              styles={{
                container: {
                },
                button: {
                    backgroundColor: 'red'
                },
                text: {
                    color: '#fff',
                    fontSize: 28
                }
              }}
              />
            <CustomButton 
              text={this.state.isPlaying ? "Stop" : "Start"} 
              onPress={this.startButtonPress}
              styles={{
                container: {
                },
                button: {
                    backgroundColor: 'green'
                },
                text: {
                    color: '#fff',
                    fontSize: 28
                }
              }}
              />
          </View>
        </View>

      </View>
    );
  }
}