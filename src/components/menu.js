import React, { useState } from 'react'
import Button from './button'
import Option from './option'

import SelectionSort from './algorithms/selectionSort'
import BubbleSort from './algorithms/bubbleSort'
import MergeSort from './algorithms/mergeSort'
import InsertionSort from './algorithms/insertionSort'
import QuickSort from './algorithms/quickSort'
import HeapSort from './algorithms/heapSort'

function generateArray() {
    const ar = []

    for (let i = 0; i < 50; i++) 
        ar.push(randRange(5, 100))

    return ar
}

const disableButtons = () => {
    document.querySelectorAll('button').forEach(elem => {
        elem.disabled = true
    })
}

const enableButtons = () => {
    document.querySelectorAll('button').forEach(elem => {
        elem.disabled = false
    })
}

const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const addSpeed = ({speed, setSpeed}) => {
    const currentSpeed = speed
    if (currentSpeed / 2 < 1) setSpeed(1)
    else setSpeed(speed/2)
    return speed
}

const decreaseSpeed = ({speed, setSpeed}) => {
    const currentSpeed = speed
    if (currentSpeed * 2 > 64) setSpeed(64)
    else setSpeed(speed*2)
    return speed
}

const Menu = ({arr, setArr, speed, setSpeed}) => {

    const array = generateArray()
    const buttonStyle = {
        marginLeft:"10px", marginRight:"10px", marginTop:"10px", marginBottom:"10px"
    }
    const adderStyle = {
        borderRadius:"50%"
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
            <span class="font-weight-light" style={{marginLeft:"5px", marginRight:"15px"}}>Speed: {1024/speed} <Button text={'+'} onClick={()=> {addSpeed({speed, setSpeed})}} style={adderStyle}/> <Button text={'-'} onClick={()=> {decreaseSpeed({speed, setSpeed})}} style={adderStyle}/></span>
            <Option text={'Enable Options'} onClick={() => {enableButtons()}} style={buttonStyle}/>
            <button type="button" className="btn btn-success" onClick={() => {setArr(generateArray);}} style={buttonStyle}>Generate Random Array</button>
            <Button text={'Selection Sort'} onClick={()=>{SelectionSort({arr, speed}); disableButtons()}} style={buttonStyle} />
            <Button text={'Bubble Sort'} onClick={()=>{BubbleSort({arr, speed}); disableButtons()}} style={buttonStyle} />
            <Button text={'Merge Sort'} onClick={()=>{MergeSort({arr, speed}); disableButtons()}} style={buttonStyle} />
            <Button text={'Insertion Sort'} onClick={()=>{InsertionSort({arr, speed}); disableButtons()}} style={buttonStyle} />
            <Button text={'Quick Sort'} onClick={()=>{QuickSort({arr, speed}); disableButtons()}} style={buttonStyle} />
            <Button text={'Heap Sort'} onClick={()=>{HeapSort({arr, speed}); disableButtons()}} style={buttonStyle} />
        </nav>
    )
}

export default Menu