import React, {useState, useEffect} from "react";
import {View, StyleSheet} from 'react-native';

const Square = () => {
 const [moleActive, setMoleActive]= useState(false)

 const randomTime = Math.random() * 20000

 useEffect(() =>{
 const timerId = setInterval(() => {
 setMoleActive (true)
 setTimeout (() => {setMoleActive(false)},800)         
 },randomTime)
 setTimeout
 },[])

 return(
 <View style = {moleActive? styles.mole : styles.square}></View>
 )
}


const styles = StyleSheet.create({
 square: {
 flex: 1,
 minWidth:80,
 minHeight: 80,
 margin: 10,
 backgroundColor: 'red',
 },
 mole: {
 flex: 1,
 minWidth:80,
 minHeight: 80,
 margin: 10,
 backgroundColor: 'blue', 
 }
});
export default Square
import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Square from './Square.js'

const GameBoard = () => {

 const [timeLeft, setTimeLeft] = useState(60 )

 useEffect(() => {
if (!timeLeft) return
 const timerId = setInterval(() =>{
 //happens every 1000ms
 setTimeLeft(timeLeft -1)
 },1000)
 return () => clearInterval(timerId)
 }, [timeLeft])

 return (
 <View style={StyleSheet.container}>
 <Text> Whack-a-mole App!</Text>
 <Text>{timeLeft}</Text>
<View style={styles.game}>
          <Square></Square>
          <Square></Square>
          <Square></Square> 
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        <Square></Square>
 
 </View>
 </View>

)
}
 const styles = StyleSheet.create({
container: {
 flex: 1,
 backgroundColor: 'row',
 alignItems:'center',
justifyContent: 'center',
},
game: {
 flexDirection:'row',
 flexWrap: 'wrap',
 width: 300,
}
})

export default GameBoard

