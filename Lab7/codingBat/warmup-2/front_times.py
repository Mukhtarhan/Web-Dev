def front_times(my_str, n):
    front_len = 3
    if front_len > len(my_str):
        front_len = len(my_str)
    front = my_str[:front_len]
    result = ""
    for i in range(n):
        result = result + front
    return result

