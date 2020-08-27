import React from 'react'

const quickSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array
    const startIndex = 0
    const endIndex = array.length - 1
    quickSort(array, startIndex, endIndex, animations)
    return animations
}

const quickSort = (array, startIndex, endIndex, animations) => {
    if (startIndex < endIndex) {
        const pivotIndex = partition(array, startIndex, endIndex, animations)

        quickSort(array, startIndex, pivotIndex - 1, animations)
        quickSort(array, pivotIndex + 1, endIndex, animations)
    }
}

const partition = (array, startIndex, endIndex, animations) => {
    // placing pivot as the last element
    let pivot = array[endIndex]
    let i = startIndex - 1

    for (let j = startIndex; j <= endIndex; j++) {
        // comparison
        animations.push([j, endIndex, 'comp'])
        // revert
        animations.push([j, endIndex, 'rev'])
        if (array[j] < pivot) {
            i += 1
            // swap
            animations.push([i, j, 'swap'])
            let t = array[i]
            array[i] = array[j]
            array[j] = t
        }
    }
    // swap ar[i + 1] with ar[end]
    animations.push([i + 1, endIndex, 'swap'])
    let t = array[i + 1]
    array[i + 1] = array[endIndex]
    array[endIndex] = t
    return i + 1
}

export default quickSortAnimations