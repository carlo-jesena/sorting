//QUESTION 1
//Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
//Bucket sort -or- Counting sort?
// let arr1 = [2, 7, 3, 6, 4, 1]
//create 7 buckets
//if value of num equals bucket index, put it there

// what if array is [30, 50, 70, 10, 100]

const linearSort = (array, min, max) => {
  let buckets = Array(max - min + 1);
  for (let i = 0; i < array.length; i++) {
      buckets[array[i]-min] = array[i];
      }
  // buckets => array with not empty spacces
  // const clear = (i) => {return i !== ''}
  // console.log(buckets.filter(clear))
  console.log('final: ' + buckets)
}

// linearSort(arr1, 1, 7)

//QUESTION 2
//Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).
//Math.random with swaps
let arr1 = [2, 7, 3, 6, 4, 1]
const shuffle = array => {
  //loop thru array
  for (let i=0; i < array.length; i++) {
    //randomly swap indexes
    let j = Math.floor((Math.random() * array.length))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
console.log(shuffle(arr1))
console.log(shuffle(arr1))
console.log(shuffle(arr1))
//QUESTION 3
//Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?
//use Quicksort
//compare the first letter of each book
//move the a's to the front, then b's, and so on
