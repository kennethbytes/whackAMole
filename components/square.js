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