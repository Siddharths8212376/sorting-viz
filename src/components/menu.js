import React, { useState } from 'react'
import Button from './button'
import selectionSortAnimations from './algorithms/selectionSort'

function generateArray() {
    const ar = []

    for (let i = 0; i < 50; i++) 
        ar.push(randRange(5, 100))

    return ar
}

const SelectionSort = (arr) => {
    const animations = selectionSortAnimations(arr)
    console.log('here', animations)
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')
        const [barOneIndex, barTwoIndex, func] = animations[i]
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        if (func === 'comp') {
            let color = 'red'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * 5);
        } else if (func === 'rev'){ 
            let color = 'blue'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * 5);

        } else if (func === 'set') {
            let color = 'green'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * 5);

        } else if (func === 'swap') {
            // change bar heights here

            let color = 'turquoise'
            setTimeout(() => {
                let firstHeight = arrayBars[barOneIndex].style.height
                let secondHeight = arrayBars[barTwoIndex].style.height
    
                arrayBars[barOneIndex].style.height = secondHeight
                arrayBars[barTwoIndex].style.height = firstHeight

                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                // barOneStyle.height = `${secondHeight}px`
                // barTwoStyle.height = `${firstHeight}px`
                console.log(barOneStyle.height, 'heelo')
              }, i * 5);
        }

    }
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