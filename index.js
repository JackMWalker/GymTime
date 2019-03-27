/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
import Home from './app/screen/home';
import Timer from './app/screen/timer';
import CreateRoutine from './app/screen/createRoutine';

Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Timer`, () => Timer);
Navigation.registerComponent(`CreateRoutine`, () => CreateRoutine);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            options: {
              topBar: {
                animate: true,
                drawBehind: true,
                visible: false
              }
            },
            children: [
              {
                component: {
                  name: 'Home',
                  options: {
                    topBar: {
                      title: {
                        text: 'Home'
                      }
                    }
                  }
                }
              }
            ]
        }
    }
  });
});