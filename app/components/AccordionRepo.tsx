"use client";

import { useState } from "react";
import RepoList from "./RepoList";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full rounded-lg">
      <button
        className="flex flex-row w-full py-2 px-4 bg-gray-200 justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="flex-1 text-normal font-bold">Example User</span>
        <span className="transform transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
          ) : (
            <ChevronUpIcon className="w-4 h-4" />
          )}
        </span>
      </button>
      {isOpen && <RepoList />}
    </div>
  );
};

export default Accordion;
