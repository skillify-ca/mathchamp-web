import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { FetchGameLevelResponse } from "../../graphql/longestStreak/fetchGameLevel";
import { FETCH_RANKED_GAME_LEVEL } from "../../graphql/longestStreak/fetchRankedGameLevel";
import { Button } from "../ui/Button";

export interface UserTableStatsProps {
  onClick: () => void;
}

export const UserTableStats: React.FC<UserTableStatsProps> = ({ onClick }) => {
  const { data } = useQuery<FetchGameLevelResponse>(FETCH_RANKED_GAME_LEVEL);

  return (
    <>
      <h1 className="flex justify-center text-2xl font-semibold md:bg-transparent md:p-none p-2 bg-red-500">
        Leader Dashboard
      </h1>
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-xl text-center font-bold bg-red-500 border-l sm:table-cell first:border-l-0 text-white"
            >
              Name
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-xl text-center font-bold bg-red-500 border-l sm:table-cell first:border-l-0 text-white"
            >
              Games Won
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-xl text-center font-bold bg-red-500 border-l sm:table-cell first:border-l-0 text-white"
            >
              Current Level
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-xl text-center font-bold bg-red-500 border-l sm:table-cell first:border-l-0 text-white"
            >
              Games Played
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-xl text-center font-bold bg-red-500 border-l sm:table-cell first:border-l-0 text-white"
            >
              Games Lost
            </th>
          </tr>
          {data &&
            data.longestStreakUserData.map((row) => {
              return (
                <tr className="block border-b text-lg font-semibold text-center sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {row.user.name}
                  </td>
                  <td
                    data-th="Games Won"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {row.gamesWon}
                  </td>
                  <td
                    data-th="Current Level"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {row.currentLevel}
                  </td>
                  <td
                    data-th="Games Played"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {row.gamesPlayed}
                  </td>
                  <td
                    data-th="Games Lost"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {row.gamesLost}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-center p-4">
        <Button
          backgroundColor="red"
          label={"Play Game"}
          onClick={onClick}
        />
      </div>
    </>
  );
};
export default UserTableStats;
