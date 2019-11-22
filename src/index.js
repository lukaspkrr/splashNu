import React, { useEffect, useState } from 'react'
import { View, Text, Animated } from 'react-native'

const logo = require('./../logo.png')

export default function App() {
    const [hide, setHide] = useState(true)
    const animation = new Animated.Value(0)
    const opacidade = new Animated.Value(0)

    const imageScale = animation.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0.5],
    })

    const logoPosition = opacidade.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -45],
    })

    const textPosition = opacidade.interpolate({
        inputRange: [0, 0.7, 1],
        outputRange: [-30, -30, 45],
    })

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
                })
            ]).start()
        }, 1000);
    }, [])

    return (
        <View style={{
            flex:1, 
            backgroundColor: 'rgb(138, 5, 190)',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Animated.Text style={{
                position: 'absolute',
                opacity: 1,
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: textPosition,
            }}>Lucas</Animated.Text>
            <View style={{
                position: 'absolute',
                height: 40,
                width: 150,
                left: -110,
                backgroundColor: 'rgb(138, 5, 190)',
            }} />
            <Animated.Image source={logo} style={{
                transform: [{scale: imageScale}],
                left: logoPosition,
                }}/>
            </View>
        </View>
    )
}