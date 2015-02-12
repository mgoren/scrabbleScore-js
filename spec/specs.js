describe("scrabbleScore", function() {
  it("return score for a single letter", function(){
    expect(scrabbleScore("q")).to.equal(10);
  });

  it("return score for a full word", function() {
    expect(scrabbleScore("Rambo")).to.equal(9);
  });
  
});
