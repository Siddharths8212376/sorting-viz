import React, { useState } from 'react'
import Button from './button'

import SelectionSort from './algorithms/selectionSort'
function generateArray() {
    const ar = []

    for (let i = 0; i < 50; i++) 
        ar.push(randRange(5, 100))

    return ar
}


const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Menu = ({arr, setArr}) => {

    const array = generateArray()
    const buttonStyle = {
        marginLeft:"10px", marginRight:"10px"
    }
    return (
        <nav className="navbar navbar-light" style={{
            backgroundColor:"#e3f2fd",
            display:"inline-block",
            textAlign:"center",
            left:"50%",
            transform:"translatex(-50%)",
            width:"100%",
            }
            }>
            <button type="button" className="btn btn-primary" onClick={() => {setArr(generateArray); console.log(arr)}} style={buttonStyle}>Generate Random Array</button>
            <button type="button" className="btn btn-primary" onClick={() => {SelectionSort(arr); console.log(arr)}} style={buttonStyle}>Selection Sort</button>
            <Button text={"Bubble Sort"} style={buttonStyle}/>
            <Button text={"Merge Sort"} style={buttonStyle}/>
        </nav>
    )
}

export default Menu