//INFO:Optimized Method
var moveZeroes = function(nums=[0,1,0,3,12]) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i]!==0) {
       nums[temp] = nums[i];
       temp++;
    }
    }
    for (let j = temp; j < nums.length; j++) {
        nums[temp] = 0;
        temp++;
    }
    console.log(nums);
    
};

// INFO:Brute force method
// var moveZeroes = function(nums=[0,1,0,3,12]) {
//   let tempArr = [];
//   let zeroes = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i]===0) {
//         zeroes++;
//       }
//       if (nums[i]!==0) {
//         tempArr.push(nums[i]);
//       }
//     }
//     nums= [...tempArr]
//     for (let index = 0; index < zeroes; index++) {
//       nums = [...nums,0]
//     }
//     console.log(nums);
// };

moveZeroes()