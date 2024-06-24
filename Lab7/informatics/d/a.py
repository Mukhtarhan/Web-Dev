a = int(input())
input_values = input().split()
b = [int(x) for x in input_values[0:]]

for i in range(0, a, 2):
    print(b[i], end=" ")
