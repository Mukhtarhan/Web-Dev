def last2(my_str):
    if len(my_str) < 2:
        return 0
    last2 = my_str[len(my_str) - 2:]
    count = 0
    for i in range(len(my_str) - 2):
        sub = my_str[i:i + 2]
        if sub == last2:
            count = count + 1
    return count
