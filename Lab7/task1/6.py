def find_min(a, b, c, d):
    num1 = min(a,b)
    num2 = min(c,d)
    return min(num1, num2)

a, b, c, d = map(int,input().split())

print(find_min(a, b, c, d))