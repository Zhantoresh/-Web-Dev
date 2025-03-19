if __name__ == '__main__':
    n = int(input())
    arr = set(map(int, input().split()))  
    arr2 = sorted(arr) 
    print(arr2[-2])  
