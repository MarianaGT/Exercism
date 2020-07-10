# Recursion

def summm(n)
  if n == 0
    return 0
  else
    rest = summm(n - 1)
    return n + rest
end


def mmmultiply(n)
  if n == 0
    return 1
  else
    rest = mmmultiply(n - 1)
    return n * rest
end
