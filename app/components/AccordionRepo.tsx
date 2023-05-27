"use client";

import { FC, useState } from "react";
import RepoList from "./RepoList";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserType } from "@/types";
import useSWR from "swr";

const fetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return response.json();
};

interface IAccordion<T> {
  User: T;
}

const Accordion: FC<IAccordion<UserType>> = ({ User }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSWR(User.repos_url, fetcher);

  const { data: user } = useSWR(
    [User.repos_url, process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN],
    fetcher
  );

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full rounded-lg">
      <button
        className="flex flex-row w-full py-2 px-4 bg-gray-200 justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="flex-1 text-normal font-bold">{User?.login}</span>
        <span className="transform transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
          ) : (
            <ChevronUpIcon className="w-4 h-4" />
          )}
        </span>
      </button>
      {data && isOpen && <RepoList RepoList={data} />}
    </div>
  );
};

export default Accordion;
