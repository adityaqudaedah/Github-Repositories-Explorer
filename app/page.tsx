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
    <section>
      <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
        {/* search & input */}
        <div className="w-full flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:w-1/2">
          <Search onChangeEvent={onChangeEvent} value={inputValue} />
          <SearchButton />
        </div>
        {/* show result */}
        {data && data.items && !error && (
          <span className="font-bold">showing users for {`"${query}"`}</span>
        )}
      </form>

      {data && data.message && (
        <div className="flex flex-row w-full h-screen">
          <span className="text-slate-500 m-auto">No Data Displayed</span>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-row w-full h-screen">
          {isLoading && <span className="m-auto font-bold">loading...</span>}
        </div>
      )}

      {data && data.items && <AccordionListRepo Users={data?.items} />}
    </section>
  );
};

export default Home;
