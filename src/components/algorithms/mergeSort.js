import React from 'react'
import mergeSortAnimations from '../animations/mergeSortAnimations'
const bars = []
const MergeSort = (arr) => {
    const animation_speed = 10
    const animations = mergeSortAnimations(arr)

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')

        const func = animations[i][animations[i].length - 1]

        if (func === 'comp') {
            const [barOneIndex, barTwoIndex, fun] = animations[i]
            const barOneStyle = arrayBars[barOneIndex].style
            const barTwoStyle = arrayBars[barTwoIndex].style
            let color = 'red'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * animation_speed);
        } else if (func === 'rev'){ 
            const [barOneIndex, barTwoIndex, fun] = animations[i]
            const barOneStyle = arrayBars[barOneIndex].style
            const barTwoStyle = arrayBars[barTwoIndex].style
            let color = '#0066ED'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * animation_speed);

        } else if (func === 'change') {

            let color = '#0066ED'
            setTimeout(() => {
                const [barOneIndex, barTwoIndex, barTwoHeight, fun] = animations[i]
                const barOneStyle = arrayBars[barOneIndex].style
                let secondHeight = barTwoHeight

                arrayBars[barOneIndex].style.height = `${secondHeight}px`
                bars.push(arrayBars[barOneIndex].style.height)
  
                barOneStyle.backgroundColor = color


              }, i * animation_speed);
        }  
    }
    console.log(bars)
}

export default MergeSort