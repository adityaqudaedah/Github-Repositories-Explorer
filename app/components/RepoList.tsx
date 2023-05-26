import React from "react";
import Repos from "./Repos";

const RepoList = () => {
  return (
    <div className="flex flex-col space-y-1 mt-1">
      <Repos />
      <Repos />
      <Repos />
      <Repos />
    </div>
  );
};

export default RepoList;
