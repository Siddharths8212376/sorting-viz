import React from 'react'
import insertionSortAnimations from '../animations/insertionSortAnimations'

const InsertionSort = (arr) => {
    const animation_speed = 50
    const animations = insertionSortAnimations(arr)
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')
        const func = animations[i][animations[i].length-1]

        if (func === 'comp') {
            const [barOneIndex, barTwoIndex, func] = animations[i]
            const barOneStyle = arrayBars[barOneIndex].style
            const barTwoStyle = arrayBars[barTwoIndex].style
            let color = 'red'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * animation_speed);
        } else if (func === 'rev'){ 
            const [barOneIndex, barTwoIndex, func] = animations[i]
            const barOneStyle = arrayBars[barOneIndex].style
            const barTwoStyle = arrayBars[barTwoIndex].style
            let color = 'blue'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * animation_speed);

        } else if (func === 'change') {
            // change bar heights here
            const [barOneIndex, barTwoHeight, func] = animations[i]
            const barOneStyle = arrayBars[barOneIndex].style
            let color = 'turquoise'
            setTimeout(() => {
                let secondHeight = barTwoHeight
                arrayBars[barOneIndex].style.height = `${secondHeight}px`
                barOneStyle.backgroundColor = color

              }, i * animation_speed);
        }

    }
}

export default InsertionSort