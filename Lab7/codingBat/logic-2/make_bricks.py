def make_bricks(small, big, goal):
  big_inches = min(big, goal // 5) * 5
  return goal - big_inches <= small
