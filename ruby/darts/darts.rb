class Darts
  def score(x,y)
    target = Math.hypot(x,y)
    target < 1 ? 10 : target < 5 ? 5 : target < 10 ? 1 : 0;
  end
end
