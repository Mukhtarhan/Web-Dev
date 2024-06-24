a = int(input())
input_values = input().split()
b = [int(x) for x in input_values[0:]]
ans = 0

for i in range(1, a):
    if (b[i] >= 0 and b[i - 1] >= 0) or (b[i] < 0 and b[i - 1] < 0):
        ans += 1
if ans > 0:
    print("YES")
else:
    print("NO")