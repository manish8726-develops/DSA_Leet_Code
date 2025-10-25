// Pure procedural approach - functions operating on data

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;//num 1 ka length
    let p2 = n - 1;//num 2 ka length
    let i = m + n - 1;
    while (p2>=0) {
        if (p1>=0 && nums1[p1] >nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
        i--;
    }
    
}
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // [1, 2, 2, 3, 5, 6]
