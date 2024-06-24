if __name__ == '__main__':
    N = int(input())
    ans = []
    for i in range(0, N):
        typ = input().split()
        if typ[0] == "insert":
            ans.insert(int(typ[1]), int(typ[2]))
        elif typ[0] == "print":
            print(ans)
        elif typ[0] == "remove":
            ans.remove(int(typ[1]))
        elif typ[0] == "append":
            ans.append(int(typ[1]))
        elif typ[0] == "sort":
            ans.sort()
        elif typ[0] == "reverse":
            ans.reverse()
        elif typ[0] == "pop":
            ans.pop()