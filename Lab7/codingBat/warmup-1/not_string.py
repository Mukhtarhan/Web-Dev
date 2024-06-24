def not_string(my_str):
    if len(my_str) >= 3 and my_str[:3] == "not":
        return my_str
    return "not " + my_str
