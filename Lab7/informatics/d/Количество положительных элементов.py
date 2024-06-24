a = int(input())
input_values = input().split()
b = [int(x) for x in input_values[0:]]
ans = 0

for i in range(0, a):
    if b[i] > 0:
        ans += 1
print(ans)