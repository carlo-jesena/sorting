// bubble sort
const swap = (array, i, j) => {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
const bubbleSort = array => {
  let swaps = 0
  for (let i=0,i<array.length-1; i++) {
    if (array[j] > array[i]) {
      swap(array, i, j)
      swaps++
    }
  }
  if (swaps>0) array
}
