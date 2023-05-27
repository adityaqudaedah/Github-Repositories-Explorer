import React, { FC } from "react";
import Repos from "./Repos";
import { RepoTypes } from "@/types";

interface IRepoList<T> {
  RepoList: Array<T>;
}

const RepoList: FC<IRepoList<RepoTypes>> = ({ RepoList }) => {

  
  return (
    <div className="flex flex-col space-y-1 mt-1">
      {RepoList.map((repos, index) => (
        <Repos key={index} Repos={repos} />
      ))}
    </div>
  );
};

export default RepoList;
