



/**
 *
 * Implement a function that accepts a sorted array and counts the unique values in the array
 * @param {*} nums
 * @returns nums
 * 
 * Time complexity O(N)
 * Space complexity O(1)
 */
function countUniqueValues(nums){
    if(nums.length == 0) return 0;
    let pointer1 = 0;
    let pointer2 = 1;
    let result  = 1;
    while(pointer2 < nums.length){
        if(nums[pointer1] === nums[pointer2]){
            pointer1 = pointer2;
            pointer2++;
        }else{
            pointer1++;pointer2++;
            result+=1;
        }
    }
    return result;
}
console.log(countUniqueValues([1,2,2,2,3,4,5,6,7,7,7]))