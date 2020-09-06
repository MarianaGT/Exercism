class ResistorColorDuo
  colors = %w(black brown red orange yellow green blue violet grey white)

  def self.value(color1, color2, *color)
    colors.index(color1).to_s + colors.index(color2).to_s
  end
end
