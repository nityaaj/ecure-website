"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const ServicesSideBar = ({ services }) => {
  const serviceTree = buildTree(services);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-[#F5F5F5] rounded-lg w-full max-w-[300px]">
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4 text-left">Our Services</h2>
        <span
          className="text-2xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </span>
      </div>

      <div
        className={
          "space-y-2 bg-[#E2E4E3] rounded-lg p-3 transition-all duration-300 " +
          (isOpen ? "block" : "hidden md:block")
        }
        style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }} 
      >
        {serviceTree.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSideBar;

function buildTree(elements) {
  const elementsMap = {};
  elements.forEach((element) => {
    elementsMap[element._id] = { ...element, subservices: [] };
  });

  const tree = [];
  elements.forEach((element) => {
    if (element.subservices && element.subservices.length > 0) {
      element.subservices.forEach((subservice) => {
        if (elementsMap[subservice._id]) {
          elementsMap[element._id].subservices.push(
            elementsMap[subservice._id]
          );
        }
      });
    }

    if (
      !elements.some((e) => e.subservices?.some((s) => s._id === element._id))
    ) {
      tree.push(elementsMap[element._id]);
    }
  });

  return tree;
}

const ServiceItem = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubservices = service.subservices.length > 0;

  const toggleSubservices = () => {
    if (hasSubservices) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className={`flex justify-between items-center cursor-pointer px-4 py-2 my-2 bg-[#F5F5F5] hover:bg-[#BFE4BB] rounded-lg shadow-sm transition-all duration-200 ${
          hasSubservices ? "border-l-4 border-[#8DC88B]" : ""
        }`}
        onClick={toggleSubservices}
      >
        <Link href={`/services/${service.slug}`}>
          <span className="font-medium text-lg text-left">{service.title}</span>
        </Link>
        {hasSubservices && (
          <span className=" text-xl text-right">
            {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </span>
        )}
      </div>

      {isOpen && hasSubservices && (
        <div className="ml-6 flex flex-col space-y-1 transition-all duration-200">
          {service.subservices.map((subservice) => (
            <div
              key={subservice._id}
              className="flex flex-col items-stretch overflow-hidden"
            >
              <ServiceItem key={subservice._id} service={subservice} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
