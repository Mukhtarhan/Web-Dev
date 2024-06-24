def string_splosion(my_str):
    result = ""
    for i in range(len(my_str)):
        result = result + my_str[:i + 1]
    return result
