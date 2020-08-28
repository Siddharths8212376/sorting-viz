import React, { useState } from 'react'
import Menu from './menu'
import './visualizer.css'
import Array from './array'

const Visualizer = () => {
    const init_array = []
    const max = 50, min = 0
    for (let i = min; i < max; i++) init_array.push(Math.floor(Math.random() * (2*max - min + 1) + min))
    const [arr, setArr] = useState(init_array)
    return (
        // visualizer basically has a menu option
        // the array 
        <div>
            <Menu arr={arr} setArr={setArr}/>
            <Array arr={arr} />
        </div>

    )
}

export default Visualizer