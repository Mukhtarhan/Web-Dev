my_string = str(input())
beginning = True

for char in reversed(my_string):
    if char != "0":
        print(char, end="")
        beginning = False
    if char == "0" and beginning == False:
        print(char, end="")
