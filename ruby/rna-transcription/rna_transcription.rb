class Complement
  def of_dna(dna)
    rna = {
      'U' => 'A',
      'G' => 'C',
      'C' => 'G',
      'A' => 'T',
      ''  => ''
    }

    dna.gsub(/\w/, rna)
  end
end
