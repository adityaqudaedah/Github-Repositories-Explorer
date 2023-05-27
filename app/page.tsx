"use client";

import AccordionListRepo from "./components/AccordionListRepo";
import { useState } from "react";
import useSWR from "swr";
import Search from "./components/Search";
import SearchButton from "./components/SearchButton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [query, setQuery] = useState<string | null>("");
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_GITHUB_ENDPOINT_URL}?q=${query}&per_page=5`,
    fetcher
  );

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    setQuery(e.target[0].value);
    // const target = e.target as HTMLFormElement

    // setQuery(target.elements[0].value)
  };
  return (
    <div>
      <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Search onChangeEvent={onChangeEvent} value={inputValue} />
          <SearchButton />
        </div>

        {data && data.items && !error && (
          <span className="font-bold">
            showing users for {`"${inputValue}"`}
          </span>
        )}
      </form>
      {isLoading && <span className="m-auto">loading...</span>}
      {error && <span>{error}</span>}
      {data && data.items && <AccordionListRepo Users={data?.items} />}

      {!data && !isLoading && (
        <span className="font-bold">no data to display</span>
      )}
    </div>
  );
};

export default Home;
