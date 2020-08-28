import React from 'react'

const heapSortAnimations = (array) => {
    const animations = []
    if (array.length <= 1) return array
    let size = array.length
    heapSort(array, size, animations)
    console.log('sorted')
    for (let i = 0; i < array.length; i++) 
        animations.push([i, i, 'over'])
    for (let i = 0; i < array.length; i++)
        animations.push([i, i, 'rev'])
    return animations
}

const heapSort = (array, size, animations) => {
    for (let i = size / 2 - 1; i >= 0 ; i--) 
        heapify(array, size, i, animations)

    for (let i = size - 1; i > 0; i--) {
        // swap
        animations.push([0, i, 'swap'])
        let t = array[0]
        array[0] = array[i]
        array[i] = t

        heapify(array, i, 0, animations)
    }
}

const heapify = (array, size, nodeIndex, animations) => {
    let largestIndex = nodeIndex
    let l = 2 * nodeIndex + 1
    let r = 2 * nodeIndex + 2

    // compare l and largest
    if (l < size) {
    animations.push([l, largestIndex, 'comp'])
    // revert
    animations.push([l, largestIndex, 'rev'])
    }
    if (l < size && array[l] > array[largestIndex])
        largestIndex = l

    // compare r and largest
    if (r < size) {
    animations.push([r, largestIndex, 'comp'])
    // revert
    animations.push([r, largestIndex, 'rev'])
    }

    if (r < size && array[r] > array[largestIndex])
        largestIndex = r
    
    // if largest != root
    if (largestIndex != nodeIndex) {
        // swap
        animations.push([nodeIndex, largestIndex, 'swap'])
        let t = array[nodeIndex]
        array[nodeIndex] = array[largestIndex]
        array[largestIndex] = t
        heapify(array, size, largestIndex, animations)
    }
}

export default heapSortAnimations