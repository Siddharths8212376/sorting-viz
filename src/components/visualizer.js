import React, { useState } from 'react'
import Menu from './menu'
import './visualizer.css'
import Array from './array'

const Visualizer = () => {
    const init_array = []
    const max = 50, min = 0
    for (let i = min; i < max; i++) init_array.push(Math.floor(Math.random() * (2*max - min + 1) + min))
    const [arr, setArr] = useState(init_array)
    const [animateSpeed, setSpeed] = useState(4)
    const [size, setSize] = useState(64)
    return (
        // visualizer basically has a menu option
        // the array 
        <div>
            <Menu arr={arr} setArr={setArr} speed={animateSpeed} setSpeed={setSpeed} size={size} setSize={setSize}/>
            <Array arr={arr} />
        </div>

    )
}

export default Visualizer