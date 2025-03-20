def make_bricks(small, big, goal):
    used_big = min(big, goal // 5)  
    remaining = goal - used_big * 5  
    return remaining <= small