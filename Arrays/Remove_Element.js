// [3,435,54,543,5456,65,34,53,34,54]
function removeElement(array=[3,435,54,543,5456,65,54,53,34,54],val=54) {
  let k=0                         
  for (let i = 0; i < array.length; i++) {
     if (array[i]!==val) {
  
         array[k] = array[i];
         k++;
     }
  }
  return k;
}
console.log(removeElement())
