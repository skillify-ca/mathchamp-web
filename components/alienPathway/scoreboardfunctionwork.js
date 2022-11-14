// UserScoreExample has four values equal to six
let UserScoreExample = {
  1: 6,
  2: 6,
  3: 3,
  4: 0,
  5: 6,
  6: 6,
};

// Function returns number of values equal to six UserObjcet
function ScoreBoardFunction(UserObject) {
  let score = 0;
  for (const [key, value] of Object.entries(UserObject)) {
    if (`${value}` == 6) {
      score += 1;
    }
  }
  return score;
}
// Correctly Outputs 4
console.log(ScoreBoardFunction(UserScoreExample));
