def sum13(nums):
    if not nums:
        return 0

    total = 0
    skip_next = False

    for num in nums:
        if skip_next:
            skip_next = False
            continue
        if num == 13:
            skip_next = True
            continue
        total += num

    return total
