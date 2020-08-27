import React from 'react'

const mergeSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array
    // creating an auxilliary array which is a copy of the 
    // initial array
    const aux = array.slice()
    const startIndex = 0
    const endIndex = array.length - 1
    divide(array, startIndex, endIndex, aux, animations)
    console.log('now', array)
    return animations
}

const divide = (mainArr, startIndex, endIndex, auxArr, animations) => {
    if (startIndex === endIndex) return 
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    divide(auxArr, startIndex, midIndex, mainArr, animations)
    divide(auxArr, midIndex + 1, endIndex, mainArr, animations)
    mergeNConquer(mainArr, startIndex, midIndex, endIndex, auxArr, animations)
}

const mergeNConquer = (mainArr, startIndex, midIndex, endIndex, auxArr, animations) => {
    let k = startIndex
    let i = startIndex
    let j = midIndex + 1

    while (i <= midIndex && j <= endIndex) {
        // comparing animation
        animations.push([i, j, 'comp'])
        // revert back to initial colors
        animations.push([i, j, 'rev'])
        if (auxArr[i] <= auxArr[j]) {
            // overwrite og[k] with aux[i]
            animations.push([k, j, auxArr[i], 'change'])
            mainArr[k++] = auxArr[i++]
        } else {
            // overwrite og[k] with aux[j]
            animations.push([k, i, auxArr[j], 'change'])
            mainArr[k++] = auxArr[j++]
        }

    }

    while (i < midIndex) {
        // compare with same value
        animations.push([i, i, 'comp'])
        // revert
        animations.push([i, i, 'rev'])
        // overwrite og[k] with aux[i]
        animations.push([k, i, auxArr[i], 'change'])
        mainArr[k++] = auxArr[i++]
    }

    while (j < endIndex) {
        // compare with same value
        animations.push([j, j, 'comp'])
        // revert
        animations.push([j, j, 'rev'])
        // overwrite og[k] with aux[i]
        animations.push([k, j, auxArr[j], 'change'])
        mainArr[k++] = auxArr[j++]
    }
}

export default mergeSortAnimations


