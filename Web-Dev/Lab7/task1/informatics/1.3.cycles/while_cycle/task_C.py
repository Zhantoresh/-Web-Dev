n = int(input())
x = 0
while x<=n:
    if pow(2,x) <= n:
        print(pow(2,x), end=" ")
    x=x+1