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
  if (UserObject[1] == 6) {
    score += 1;
  }
  if (UserObject[2] == 6) {
    score += 1;
  }
  if (UserObject[3] == 6) {
    score += 1;
  }
  if (UserObject[4] == 6) {
    score += 1;
  }
  if (UserObject[5] == 6) {
    score += 1;
  }
  if (UserObject[6] == 6) {
    score += 1;
  }
  return score;
}
// Correctly Outputs 4
console.log(ScoreBoardFunction(UserScoreExample));
