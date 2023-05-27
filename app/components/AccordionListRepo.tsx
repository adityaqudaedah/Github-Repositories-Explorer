import React, { FC } from "react";
import Accordion from "./AccordionRepo";
import { UserType } from "@/types";

interface IAccordionListRepo<T> {
  Users: Array<T>;
}
const AccordionListRepo: FC<IAccordionListRepo<UserType>> = ({ Users }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-1 mt-2 sm:grid-cols-4 ">
      {Users.map((user, index) => (
        <Accordion key={index} User={user} />
      ))}
    </div>
  );
};

export default AccordionListRepo;
