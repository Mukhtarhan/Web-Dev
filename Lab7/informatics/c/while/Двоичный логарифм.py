N = int(input())
k = 0
power_of_two = 1
while power_of_two < N:
    k += 1
    power_of_two *= 2

print(k)