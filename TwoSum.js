/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * @param {*} arr
 * @param {*} n
 */


var nums = [2, 7, 11, 15], target = 9
function TwoSumNaive(nums, target){
    let result = [];
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if (nums[i] + nums[j] == target){
                if (result.indexOf(i) === -1 && result.indexOf(j) === -1){
                    result.push(i, j)
                    return result;
                }
                    
            }
        }
    }
    return result;
}

function TwoSum(nums,target){
    
    var result = [];
    let  m = new Map()
    for(let i = 0;i < nums.length;i++){
        m.set(nums[i],i)
    }
    for(let i=0; i < nums.length;i++){
        let complement = target - nums[i];
        if(m.has(complement) && m.get(complement) !== i){
            result.push(i)
        }
    }
    return result

}
console.log(TwoSum(nums,target))