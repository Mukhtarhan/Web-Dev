import math

a = int(input())
b = int(input())

for i in range(a, b+1):
    if math.floor(math.sqrt(i)) * math.floor(math.sqrt(i)) == i:
        print(i, end=" ")