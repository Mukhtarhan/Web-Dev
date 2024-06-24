def string_bits(my_str):
    result = ""
    for i in range(len(my_str)):
        if i % 2 == 0:
            result = result + my_str[i]
    return result
