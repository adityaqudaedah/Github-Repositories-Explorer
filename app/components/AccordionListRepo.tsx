import React from "react";
import Accordion from "./AccordionRepo";

const AccordionListRepo = () => {
  return (
    <div className="w-full flex flex-col space-y-4 mt-2 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      </div>
  );
};

export default AccordionListRepo;
