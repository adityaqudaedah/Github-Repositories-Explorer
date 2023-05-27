import React, { FC } from "react";

interface ISearch {
  value?: string | null;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearch> = ({ onChangeEvent }) => {
  return (
    <input
      name="search"
      type="text"
      placeholder="Enter username"
      className="w-full bg-slate-100 border focus:outline-none focus:border-slate-300 rounded p-2"
      onChange={onChangeEvent}
    />
  );
};

export default Search;
