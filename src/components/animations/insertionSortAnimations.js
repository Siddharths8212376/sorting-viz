import React from 'react'

const insertionSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1

        // comparison happens here
        animations.push([j, i, 'comp'])
        // revert comparisons
        animations.push([j, i, 'comp'])
        while (j >= 0 && array[j] > key) {
            // to change height of bar[j + 1] with arr[j]
            animations.push([j + 1, array[j], 'change'])
            array[j + 1] = array[j]
            j -= 1
        }
        // change arr[j + 1] to key
        animations.push([j + 1, key, 'change'])
        array[j + 1] = key
    }
    for (let i = 0; i < array.length; i++) 
        animations.push([i, i, 'over'])
    for (let i = 0; i < array.length; i++)
        animations.push([i, i, 'rev'])
    return animations
}

export default insertionSortAnimations