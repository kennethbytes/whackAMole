import React from "react";
import {view, stylesheet } from 'react-native';

const Square = () => {
       const [moleactive, setMoleactive] = usestate(flase)
        
       const ramdomTime = Math.random() *20000
        
       useEffect(() => {
           const TimeID = setInterval(() => {
            setMoleactive(true)
            setTimeout(() => {setmoleActive(false)},800)
           },randomtime)
           setTimeout(endGame, )

        } [])




       return(
          <view styles={moleactive? styles.mole : styles.square}></view>

     ) 
}


const styles = stylesheet.create({
    square: {
        flex: 1,
        minwidth: 80,
        minHeight: 80,
        margin: 10,
        backgroundcolor: 'red',
    }
})

export default square