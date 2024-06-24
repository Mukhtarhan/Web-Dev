def centered_average(nums):
    nums.remove(max(nums))
    nums.remove(min(nums))

    total = sum(nums)

    average = total // len(nums)

    return average
