import React from 'react'

const bubbleSortAnimations = (array) => {
    const animations = []   
    if (array.length <= 1) return array

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // comparing indices
            animations.push([j, j + 1, 'comp'])
            // reverting the comparisons
            animations.push([j, j + 1, 'rev'])
            if (array[j] > array[j + 1]) {
                // swap
                animations.push([j, j + 1, 'swap'])
                let t = array[j]
                array[j] = array[j + 1]
                array[j + 1] = t
            }
        }
    }
    for (let i = 0; i < array.length; i++) 
        animations.push([i, i, 'over'])
    for (let i = 0; i < array.length; i++)
        animations.push([i, i, 'rev'])
    return animations
}

export default bubbleSortAnimations