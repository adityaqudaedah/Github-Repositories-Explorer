import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const Repos = () => {
  return (
    <div className="flex flex-row bg-gray-100 p-1 rounded">
      {/* repo title & description*/}
      <div className="flex-1 flex-col">
        {/* repo title */}
        <h4 className="text-md font-bold">Repo Title</h4>
        {/* description */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at reprehenderit totam facere quo, tempore magni ipsam, nostrum corrupti, beatae laudantium inventore sint non consequatur soluta rem </p>
      </div>

      {/* repo start */}
      <div className="flex flex-row items-center mb-auto">
        <h4 className="text-lg font-bold">12</h4>

        <StarIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Repos;
