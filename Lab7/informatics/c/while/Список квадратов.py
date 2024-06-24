import math

n = int(input())
i = 1
while i <= n:
    if math.isqrt(i) * math.isqrt(i) == i:
        print(i)
    i += 1