import React from "react";

interface UserProgress {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
}

const generateScore = (userProgress: UserProgress) => {
  let score = 0;
  for (let index = 1; index < 7; index++) {
    if (userProgress[index] == 6) {
      score += 1;
    }
  }
  return score;
};

export default generateScore;
