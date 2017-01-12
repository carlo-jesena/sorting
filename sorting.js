// bubble sort
const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
const bubbleSort = array => {
    let swaps = 0
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1)
            swaps++
        }
    }
    if (swaps > 0) {
      return bubbleSort(array)
    }
    return array
}

const mergeSort = array => {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
}

const merge = (left, right, array) => {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        } else { array[outputIndex++] = right[rightIndex++] }
    }
    for (let i = leftIndex; i < leftIndex.length; leftIndex++) {
      array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < rightIndex.length; rightIndex++) {
      array[outputIndex++] = right[i]
    }
    return array
}

array1 = [1,5,8,3,4,2,7,6]
console.log(bubbleSort(array1))
console.log(mergeSort(array1))
