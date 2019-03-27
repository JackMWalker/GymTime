import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    headerContainer: {
      flex: 1,
      backgroundColor: 'white', 
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 15
    },
    bodyContainer: {
      flex: 9,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    exerciseNameText: {
      fontSize: 30,
      textAlign: 'center',
    },
    timerClock: {
      margin: 20
    },
    buttonContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });
  
export default styles;