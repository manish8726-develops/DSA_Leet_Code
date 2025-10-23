var removeElement = function(nums,val) {
  let k=0
for (let i = 0; i < nums.length; i++) {
   if (nums[i]===val) {
       for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j+1]; 
       }
   }
   break;
}
nums.pop();
return nums
};
console.log(removeElement([23,45,56,34,78],78));