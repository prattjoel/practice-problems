// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// 
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// 
// You may assume nums1 and nums2 cannot be both empty.
// 
// Example 1:
// 
// nums1 = [1, 3]
// nums2 = [2]
// 
// The median is 2.0
// Example 2:
// 
// nums1 = [1, 2]
// nums2 = [3, 4]
// 
// The median is (2 + 3)/2 = 2.5


const median = (nums1, nums2) => {
    
    let index1 = 0;
    let index2 = 0;
    const newArr = [];
    
    while (nums1[index1] || nums2[index2]){
      if (nums1[index1] === undefined || nums2[index2] === undefined){
        newArr.push(nums1[index1] || nums2[index2]);
        index1++
        index2++
      }
      else if (nums1[index1] === nums2[index2]){
        newArr.push(nums1[index1]);
        index1++
        newArr.push(nums2[index2]);
        index2++
      }
      else if (nums1[index1] < nums2[index2]){
        newArr.push(nums1[index1]);
        index1++
      } else if (nums1[index1] > nums2[index2]){
        newArr.push(nums2[index2]);
        index2++
      }
    }
    console.log(newArr);
    const median = (newArr.length % 2 === 0) ? ((newArr[newArr.length/2] + newArr[(newArr.length/2) + 1])/2 ) : Math.floor(newArr[(newArr.length/2)])
    return median
}
const nums1 = [1, 3]
const nums2 = [2]
console.log(median(nums1, nums2));