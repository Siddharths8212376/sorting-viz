import React, { useState } from 'react'
import Menu from './menu'
import './visualizer.css'

const Array = ({ arr }) => {
    
    return (
        <div className="array-container">
            {arr.map((value, idx) => (
                <div className="array-bar" key={idx} 
                style={{
                    backgroundColor: "blue",
                    height: `${value}px`,
                }}> </div>
            ))}
        </div>
    )
}


const Visualizer = () => {
    const [arr, setArr] = useState([])
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