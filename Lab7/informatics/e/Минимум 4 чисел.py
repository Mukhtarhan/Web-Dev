def min_of_four(a, b, c, d):
    return min(a, b, c, d)


input_values = input().split()
a, b, c, d = [int(x) for x in input_values[0:]]

print(min_of_four(a, b, c, d))
