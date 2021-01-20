

function MergeSort(arr){
    if(arr.length <= 1) return arr;
    let pivot = Math.floor(arr.length/2)
    let left = arr.slice(0,pivot)
    let right = arr.slice(pivot)
    return merge(MergeSort(left), MergeSort(right))
}
function merge(left, right){
    let result = []; let leftidx = 0; let rightidx = 0;
    while(leftidx < left.length && rightidx < right.length){
        if(left[leftidx] < right[rightidx]){
            result.push(left[leftidx])
            leftidx++
        }else{
            result.push(right[rightidx])
            rightidx++
        }
    }
    return result.concat(left.slice(leftidx),right.slice(rightidx))
}
console.clear()
console.log(MergeSort([3, 5, 7, 2, 1, 9, 5,0]))