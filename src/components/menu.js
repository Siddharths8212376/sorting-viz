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
    return (
        <nav className="navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
            <button type="button" className="btn btn-primary" onClick={() => {setArr(generateArray); console.log(arr)}}>Generate Random Array</button>
            <button type="button" className="btn btn-primary" onClick={() => {SelectionSort(arr); console.log(arr)}}>Selection Sort</button>
            <Button text={"Bubble Sort"}/>
            <Button text={"Merge Sort"}/>
        </nav>
    )
}

export default Menu