 function removeDuplicates(nums) {
let x = 0;
for (let index = 1; index < nums.length; index++) {
    if (nums[index]!=nums[x]) {
      x=x+1;
      nums[x]= nums[index];
    }
  
}
return x+1
};
console.log(removeDuplicates([5,5,7,8,8,9,9,10,10]))

// Example
const nums = [1, 1, 2, 2, 3, 4, 4];
const newLength = removeDuplicates(nums);
console.log("New length:", newLength);
console.log("Array after removing duplicates:", nums.slice(0, newLength));
