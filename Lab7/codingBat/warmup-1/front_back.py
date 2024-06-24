def front_back(mystr):
    if len(mystr) <= 1:
        return mystr
    mid = mystr[1:len(mystr) - 1]
    return mystr[len(mystr) - 1] + mid + mystr[0]