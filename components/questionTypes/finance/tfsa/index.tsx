import React, { useEffect, useState } from "react";
import { SidebarItem } from "./SidebarItem";
import TFSAAnnualLimit from "./TFSAAnnualLimit";
import TFSABasics from "./TFSABasics";
import TFSATotalContribution from "./TFSATotalContribution";

export default function TFSA(props) {
  enum SECTION {
    BASICS,
    ANNUAL_LIMIT,
    TOTAL_CONTRIBUTION,
  }
  const [selectedSection, setSelectedSection] = useState(SECTION.BASICS);

  return (
    <div className={"grid grid-cols-12 bg-blue-300"}>
      <div className="flex flex-col col-span-12 sm:col-span-4">
        <SidebarItem onClick={(_) => setSelectedSection(SECTION.BASICS)}>
          <p className="">Why does the TFSA matter?</p>
        </SidebarItem>

        <SidebarItem onClick={(_) => setSelectedSection(SECTION.ANNUAL_LIMIT)}>
          Why does the annual limit change every year?
        </SidebarItem>
        <SidebarItem
          onClick={(_) => setSelectedSection(SECTION.TOTAL_CONTRIBUTION)}
        >
          How much can I contribute to my TFSA in total?
        </SidebarItem>
      </div>
      <div className="min-h-screen col-span-12 bg-white sm:col-span-8">
        {selectedSection === SECTION.BASICS ? (
          <TFSABasics />
        ) : selectedSection === SECTION.ANNUAL_LIMIT ? (
          <TFSAAnnualLimit />
        ) : (
          <TFSATotalContribution />
        )}
      </div>
    </div>
  );
}
