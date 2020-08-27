import React from 'react'
import mergeSortAnimations from '../animations/mergeSortAnimations'
const bars = []
const MergeSort = (arr) => {
    const animation_speed = 10
    const animations = mergeSortAnimations(arr)
    
    // console.log(animations, 'here')
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')
        // console.log(animations[i], i, 'th animation')
        const func = animations[i][animations[i].length - 1]

        // console.log(animations[i])
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
            let color = 'blue'
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * animation_speed);

        } else if (func === 'change') {
            // change bar heights here
            // console.log(animations[i][0], animations[i][2])

            let color = 'turquoise'

            setTimeout(() => {
                const [barOneIndex, barTwoIndex, barTwoHeight, fun] = animations[i]
                const barOneStyle = arrayBars[barOneIndex].style
                const barTwoStyle = arrayBars[barTwoIndex].style

                // let firstHeight = arrayBars[barOneIndex].style.height
                // let secondHeight = arrayBars[barTwoIndex].style.height
                let secondHeight = barTwoHeight
                // console.log(barOneIndex, "->", secondHeight)
                arrayBars[barOneIndex].style.height = `${secondHeight}px`
                bars.push(arrayBars[barOneIndex].style.height)
                // arrayBars[barTwoIndex].style.height = firstHeight

                barOneStyle.backgroundColor = color
                // barTwoStyle.backgroundColor = color

              }, i * animation_speed);
        }  
    }
    console.log(bars)
}

export default MergeSort