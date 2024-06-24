def power(a, n):
    n = int(n)
    if n == 0:
        return 1
    ans = a
    n -= 1
    while n > 0:
        ans *= a
        n -= 1
    return ans

input_values = input().split()
a, b = [float(x) for x in input_values[0:]]

print(power(a, b))