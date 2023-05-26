import React from "react";
import Search from "./Search";
import SearchButton from "./SearchButton";

const FormSearch = () => {
  return (
    <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Search />
      <SearchButton />
    </form>
  );
};

export default FormSearch;
