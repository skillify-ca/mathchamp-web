import React, { useEffect, useState } from "react";

export enum BlockState {
  PLAYER_ONE_SELECTED,
  PLAYER_TWO_SELECTED,
  NOT_SELECTED,
  HIGHLIGHTED,
}

export interface MultiplicationBlockProps {
  text: string;
  onClick: () => void;
  blockState: BlockState;
}

export const MultiplicationBlock: React.FC<MultiplicationBlockProps> = ({
  text,
  onClick,
  blockState,
  ...props
}) => {
  return (
    <div className="cursor-pointer">
      <div

        className={`md:w-20 md:h-20 w-10 h-10 flex justify-center items-center md:border-2 bg-gradient-to-b hover:bg-red-400 text-white md:px-3 px-2 md:pt-0 pt-2 text-justify md:font-bold text-sm md:text-xl md:border-b-4 border-b-2 rounded-lg active:border-b-2 cursor-pointer float-left

        ${
          blockState === BlockState.PLAYER_ONE_SELECTED
            ? "bg-red-500 animate-pulse"
            : blockState === BlockState.PLAYER_TWO_SELECTED
            ? "bg-zinc-400 line-through"
            : blockState === BlockState.HIGHLIGHTED
            ? "bg-gray-900 animate-bounce"
            : "bg-slate-600"
        }
        `}
        onClick={onClick}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
export default MultiplicationBlock;
