//INFO: Concept used Varible Swaping using Third Variable
var reverseString = function (s=['M','a','n','i','s','h']) {
   let left = 0;
   let right = s.length - 1;
   while (right > left) {
    let temp = s[left];
    s[left] = s[right];//right side ki value left side me ayegi
     s[right] = temp;//left side ki value right side mea ayegi
    left++;
    right--;
   }
   console.log(s)
};
reverseString()