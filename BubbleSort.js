function BubbleSort(nums){
    for(let i = 0; i<nums.length;i++){
        for(let j = 0; j<(nums.length - i -1);j++){
            if (nums[j] > nums[j + 1]) {
                var tmp = nums[j];  
                nums[j] = nums[j + 1]; 
                nums[j + 1] = tmp;
            }
        }
    }
    console.log(nums)
}
BubbleSort([3,-1,4,5,7,0,2])