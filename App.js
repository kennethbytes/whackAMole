import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from "react-native"
import Square from './Square.js'

const  GameBoard = () => {
    const [timeLeft, setTimeLeft] = useState(11)
   
     }
     
    useEffect(() => {
        if(!timeLeft) return
        const timerId = setInterval(() => {
            //happens every 1000ms
            setTimeLeft(timeLeft -1)
        },1000)
        return () => clearInterval(timerId)
    },[timeLeft])

    return (
      <View style={StyleSheet.container}>
            <Text>Ania's Whack- a mole App!</Text>
            <Text>{timeLeft}</Text>
        <View style={StyleSheet.game}></View>
      





   
