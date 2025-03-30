def big_diff(nums):
  maximum = nums[0]
  for i in range(len(nums)):
    if nums[i] > maximum:
      maximum = nums[i]
  minimum = nums[0]
  for i in range(len(nums)):
    if nums[i] < minimum:
      minimum = nums[i]
  return maximum-minimum
