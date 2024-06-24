def make_chocolate(small, big, goal):
  big_kilos = min(big, goal // 5) * 5
  remaining_goal = goal - big_kilos
  if remaining_goal <= small:
    return remaining_goal
  else:
    return -1
