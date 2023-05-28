import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RepoTypes } from "@/types";
import { FC } from "react";

interface IRepos<T> {
  Repos: T;
}

const Repos: FC<IRepos<RepoTypes>> = ({ Repos }) => {
  return (
    <div className="flex flex-row bg-gray-300 p-1 rounded overflow-auto space-x-2">
      {/* repo title & description*/}
      <div className="flex-1 flex-col">
        {/* repo title */}
        <h4 className="text-md font-bold">{Repos.name}</h4>
        {/* description */}
        <p>{Repos.description ?? <span>no description</span>}</p>
      </div>

      {/* repo start */}
      <div className="flex flex-row items-center mb-auto space-x-1">
        <h4 className="text-lg font-bold">{Repos.stargazers_count}</h4>
        <StarIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Repos;
