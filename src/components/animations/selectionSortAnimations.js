import React from 'react'

const selectionSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array
    let minIndex = 0
    for (let i = 0; i < array.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            // comparing indices j and minIndex

            animations.push([j, minIndex, 'comp'])
            // for reverting the colors
            animations.push([j, minIndex, 'rev'])
            if (array[j] < array[minIndex]) {
                minIndex = j
                animations.push([minIndex, minIndex,'set'])
            }

        }
        if (minIndex != i) {
            // swap

            animations.push([minIndex, i, 'swap'])
            let t = array[minIndex]
            array[minIndex] = array[i]
            array[i] = t
        }

    }
    for (let i = 0; i < array.length; i++) 
        animations.push([i, i, 'over'])
    for (let i = 0; i < array.length; i++)
        animations.push([i, i, 'rev'])
    return animations
}

export default selectionSortAnimations;