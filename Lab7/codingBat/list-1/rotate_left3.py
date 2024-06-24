def rotate_left3(nums):
  nums.append(nums.pop(0))
  return nums
