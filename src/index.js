import 'react-native-gesture-handler';

import React from 'react';
import Routes from './routes';

import {setNavigator} from './services/navigation';

export default function Index() {
  return <Routes ref={setNavigator} />;
}
