import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Splash from './Pages/Splash';
import Home from './Pages/Home';

const AppNavigator = createSwitchNavigator(
  {
    Splash,
    Home,
  },
  {
    initialRouteName: 'Splash',
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
