import { useState } from "react";
import Link from "next/link";

export default function SkillCard({ skill, courseId }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Link href={`/math1/practice/${skill.id}`}>
      <div
        onMouseEnter={() => setIsSelected(true)}
        onMouseLeave={() => setIsSelected(false)}
        className={`${"cursor-pointer transform transition duration-200 hover:bg-gray-200"} bg-gray-100 w-full mb-4 flex flex-row sm:flex-col items-center h-full rounded-xl shadow-lg`}
      >
        <div className="h-full col-span-10">
          <p className="flex items-center justify-start h-full col-span-8 p-4 text-center text-murkrow">
            {`I can ${skill.description}`}
          </p>
        </div>
        <div className="h-full col-span-2 rounded-r-lg">
          <p
            className={` col-span-2 justify-center rounded-r-lg text-center flex items-center h-full text-4xl mb-4 transform transition-all ease-in-out duration-200 ${
              isSelected ? "-rotate-45 scale-110" : ""
            }`}
          >
            {getEmoji(99)}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
}

export const EMOJI_MASTERY = 66;
export function getEmoji(emojiNum: number | null) {
  if (emojiNum === undefined) {
    console.error("Error getting emoji value.");
    return "⁉️";
  } else if (emojiNum === null) {
    return "❓";
  } else if (emojiNum >= 0 && emojiNum <= 33) {
    return "😔";
  } else if (emojiNum >= 34 && emojiNum <= EMOJI_MASTERY) {
    return "😐";
  } else {
    return "😄";
  }
}
