import React, {useEffect} from 'react';
import {StatusBar, Animated} from 'react-native';

import {Container, Content, SplashText, Block} from './styles';

import logo from './../../assets/images/logo.png';

export default function App({navigation}) {
  const AnimatedText = Animated.createAnimatedComponent(SplashText);
  const animation = new Animated.Value(0);
  const opacidade = new Animated.Value(0);

  const imageScale = animation.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.5],
  });

  const logoPosition = opacidade.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -45],
  });

  const textPosition = opacidade.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [-30, -30, 45],
  });

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 100,
          duration: 200,
        }),
        Animated.timing(opacidade, {
          toValue: 1,
          duration: 500,
        }),
      ]).start(() => {
        setTimeout(() => {
          navigation.navigate('Home');
        }, 1000);
      });
    }, 1000);
  }, []);

  return (
    <Container>
      <StatusBar hidden translucent />
      <Content>
        <AnimatedText
          style={{
            marginLeft: textPosition,
          }}>
          Lucas
        </AnimatedText>
        <Block />
        <Animated.Image
          source={logo}
          style={{
            transform: [{scale: imageScale}],
            left: logoPosition,
          }}
        />
      </Content>
    </Container>
  );
}
