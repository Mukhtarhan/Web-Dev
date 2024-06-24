def close_far(a, b, c):
  if abs(b - a) <= 1:
      return abs(c - a) >= 2 and abs(c - b) >= 2
  elif abs(c - a) <= 1:
      return abs(b - a) >= 2 and abs(b - c) >= 2
  else:
      return False
