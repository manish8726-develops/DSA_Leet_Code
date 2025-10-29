var missingNumber = function(nums=[9,6,4,2,3,7,1]) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    let actualSum = (nums.length*(nums.length+1))/2
    let missingNum = actualSum-sum;
    return missingNum
    
};
console.log(missingNumber())