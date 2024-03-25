"use client";
import { useState } from "react";

const MidTabs = () => {
  const [state, setState] = useState("Mission Statement");

  return (
    <div className="my-3">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* tabs */}
        <div className="col-span-1 w-full ">
          <ul className="flex gap-2 tracking-wider lg:gap-0 items-center lg:items-start flex-row cursor-pointer flex-wrap lg:flex-col space-y-2">
            <li
              onClick={() => setState("mission")}
              className={`text-primary ${
                state === "Mission Statement" ? "font-bold" : ""
              }`}
            >
              Mission Statement
            </li>

            <li
              onClick={() => setState("history")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              History
            </li>

            <li
              onClick={() => setState("Target")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Target Market
            </li>

            <li
              onClick={() => setState("Competitive")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Competitive Advantage
            </li>
            <li
              onClick={() => setState("Financial")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Financial Overview
            </li>
            <li
              onClick={() => setState("Milestones")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Milestones and Achievements
            </li>
            <li
              onClick={() => setState("Partnerships")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Partnerships or Affiliations
            </li>
            <li
              onClick={() => setState("Social")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Social Responsibility Initiatives
            </li>
            <li
              onClick={() => setState("Future")}
              className={`text-primary ${
                state === "history" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Future Goals and Outlook
            </li>
          </ul>
        </div>

        {/* content */}
        <div className="col-span-3 h-72 w-full border">
          <div>
            {state === "mission" && <div className="py-3 ">fasfda</div>}
          </div>
          <div>{state === "history" && <div className="py-3 ">ddd</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default MidTabs;
