n = int(input())
arr = list(map(int,input().split()))
count = 0
for a in arr:
    if a>0:
        count+=1
print(count)