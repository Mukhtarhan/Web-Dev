a = int(input())
input_values = input().split()
b = [int(x) for x in input_values[0:]]
ans = 0

left = 0
right = a - 1

while left < right:
    b[left], b[right] = b[right], b[left]
    left += 1
    right -= 1

for i in range(0, a):
    print(b[i], end=" ")