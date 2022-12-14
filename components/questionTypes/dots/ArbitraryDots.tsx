import React, { useEffect, useState } from "react";
import { getRandomItemFromArray } from "../../../pages/api/random";

export interface DotProps {
  exists: boolean;
  visible: boolean;
}

const Dot = ({ exists = true, visible = true }: DotProps) => {
  const [displayLength, setDisplayLength] = useState(3);
  const [colourDisplay, setColourDisplay] = useState("");
  const [margin, setMargin] = useState(0);

  const colourArr = ["pink", "green", "blue", "purple", "red"];

  useEffect(() => {
    const possibleLengths = [3, 4, 5, 6, 7, 8];
    setDisplayLength(getRandomItemFromArray(possibleLengths));
    setColourDisplay(getRandomItemFromArray(colourArr));
    setMargin(getRandomItemFromArray([-4, -3, -2, -1, 0, 1, 2, 3]));
  }, []);

  return (
    exists && (
      <div
        className={`${visible ? "opacity-100" : "opacity-0"} 
          m-${margin}
          rounded-full shadow-md h-${displayLength} w-${displayLength}  bg-${colourDisplay}-400 border-black`}
      ></div>
    )
  );
};

export interface ArbitraryDotsProps {
  value: number;
}

const ArbitraryDots = ({ value = 0 }: ArbitraryDotsProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <Dot
          exists={getDotProps(0, value).exists}
          visible={getDotProps(0, value).visible}
        />
        <Dot
          exists={getDotProps(1, value).exists}
          visible={getDotProps(1, value).visible}
        />
        <Dot
          exists={getDotProps(2, value).exists}
          visible={getDotProps(2, value).visible}
        />
        <Dot
          exists={getDotProps(3, value).exists}
          visible={getDotProps(3, value).visible}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Dot
          exists={getDotProps(4, value).exists}
          visible={getDotProps(4, value).visible}
        />
        <Dot
          exists={getDotProps(5, value).exists}
          visible={getDotProps(5, value).visible}
        />
        <Dot
          exists={getDotProps(6, value).exists}
          visible={getDotProps(6, value).visible}
        />
        <Dot
          exists={getDotProps(7, value).exists}
          visible={getDotProps(7, value).visible}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Dot
          exists={getDotProps(8, value).exists}
          visible={getDotProps(8, value).visible}
        />
        <Dot
          exists={getDotProps(9, value).exists}
          visible={getDotProps(9, value).visible}
        />
        <Dot
          exists={getDotProps(10, value).exists}
          visible={getDotProps(10, value).visible}
        />
        <Dot
          exists={getDotProps(11, value).exists}
          visible={getDotProps(11, value).visible}
        />
      </div>
    </div>
  );
};

const getDotProps = (id: number, value: number) => {
  const existanceMap = [
    [
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
    ], // Dot 0
    [
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: true },
    ], // Dot 1
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 2
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 3
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 4
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 5
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 6
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 7
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 8
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 9
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 10
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 11
  ];
  if (
    existanceMap[id][value] !== null &&
    existanceMap[id][value] !== undefined
  ) {
    return existanceMap[value][id];
  }
};

export default ArbitraryDots;
