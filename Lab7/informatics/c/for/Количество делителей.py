import math

def number_of_divisors(n):
    counter = 0
    for i in range(1, math.isqrt(n) + 1):
        if n % i == 0:
            counter += 1
            if i * i != n:
                counter += 1
    return counter

a = int(input())
print(number_of_divisors(a))