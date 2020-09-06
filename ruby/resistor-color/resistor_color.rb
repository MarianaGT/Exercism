class ResistorColor
  colors = %w(black brown red orange yellow green blue violet grey white)

  def self.color_code(color)
    colors.index(color)
  end
end
