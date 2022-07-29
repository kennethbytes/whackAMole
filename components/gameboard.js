import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import Square from './components/Square';

export default function GameBoard() {
    return(
    <view style={styles.container}>
        <text>Whack-A-Mole App</text>
        <view style={styles.game}>
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
    </view>
    </view>
    )
};

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifycontent: 'center',
},
game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
}
});


