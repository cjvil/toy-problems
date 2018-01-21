/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// STRATEGY:
// Store number that is moving out of window. If number being lost === max, recalculate max.

var maxSlidingWindow = function(nums, k) {
  if (!nums.length) {
    return [];
  }
  const output = [];
  
  let max = nums.slice(0, k).reduce((num, acc) => {
    return num > acc ? num : acc;
  });
  
  let prev = nums[0];
  
  for (let i = 0; i <= nums.length - k; i++) {
    if (prev === max) {
      max = nums.slice(i, i + k).reduce((num, acc) => {
        return num > acc ? num : acc;
      });
    } else if (nums[i + k -1] > max) {
      max = nums[i + k - 1];
    }
    
    prev = nums[i];
    output.push(max);
  }
  
  return output;
};