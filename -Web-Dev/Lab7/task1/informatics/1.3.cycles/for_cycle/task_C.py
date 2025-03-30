import math
a = int(input())
b = int(input())
for i in range(a,b+1):
    x = math.isqrt(i)
    if x*x == i:
        print(i, end=" ")