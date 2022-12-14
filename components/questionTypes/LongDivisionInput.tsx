import React from "react";

export interface LongDivisionInputProps {
  id: string;
  guess: string;
  setGuess: (string) => void;
  handleKeypress?: (e) => void;
  width: number;
}

/**
 * Input tag in which user inputs their quotient answer (width changes according to dividend's # of digits)
 */
export const LongDivisionInput: React.FC<LongDivisionInputProps> = ({
  id,
  guess,
  setGuess,
  handleKeypress,
  width,
}) => {
  return (
    <input
      autoFocus
      id={id}
      type="number"
      autoComplete="off"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      className={`appearance-none text-left border border-gray-300 rounded-md text-5xl w-${width}`}
      placeholder=""
      onKeyPress={handleKeypress}
    />
  );
};
