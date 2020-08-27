import React from 'react'
import selectionSortAnimations from '../animations/selectionSortAnimations'

const SelectionSort = (arr) => {
    const animations = selectionSortAnimations(arr)
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

              }, i * 5);
        }

    }
}

export default SelectionSort