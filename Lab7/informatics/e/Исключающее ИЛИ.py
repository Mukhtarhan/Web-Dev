def xor(x, y):
    if x and y:
        return False
    elif not x and not y:
        return False
    else:
        return True


x, y = input().split()
x, y = int(x), int(y)

print(int(xor(x, y)))