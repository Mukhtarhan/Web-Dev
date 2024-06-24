a = int(input())
input_values = input().split()
b = [int(x) for x in input_values[0:]]
ans = 0

for i in range(1, a):
    if b[i] > b[i - 1]:
        ans += 1
print(ans)