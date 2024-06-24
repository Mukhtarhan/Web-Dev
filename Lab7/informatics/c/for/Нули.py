numbers = []

n = int(input())
ans = 0

for i in range(n):
    num = int(input())
    if num == 0:
        ans += 1

print(ans)
