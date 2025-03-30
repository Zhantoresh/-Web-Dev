x = int(input())

if x == 0:
    print(0)
else:
    while x % 10 == 0:  
        x //= 10

    while x > 0:
        print(x % 10, end="")  
        x //= 10  
