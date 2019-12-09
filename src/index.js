import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

import {setNavigator} from './services/navigation';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Routes ref={setNavigator} />
    </>
  );
}
