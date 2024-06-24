def front3(my_str):
    front_end = 3
    if len(my_str) < front_end:
        front_end = len(my_str)
    front = my_str[:front_end]
    return front + front + front
