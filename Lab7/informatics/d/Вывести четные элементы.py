a = int(input())
input_values = input().split()
b = [int(x) for x in input_values[0:]]

for i in range(0, a):
    if b[i] % 2 == 0:
        print(b[i], end=" ")
