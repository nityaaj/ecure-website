"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const ServicesSideBar = ({ services }) => {
  const serviceTree = buildTree(services);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="flex w-full justify-between items-center md:block">
        <h2 className="font-semibold text-2xl  mb-2">Our Services</h2>
        <span className="text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </span>
      </div>
      <div
        className={"border-b border-gray-300 md:block" + (isOpen ? " block" : " hidden")}
        style={{ borderBottomWidth: "1px" }}
      />
      <div className={"md:space-y-2 md:block" + (isOpen ? " block" : " hidden")}>
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
    <div>
      <div className="flex justify-between items-center cursor-pointer ">
        <Link href={`/services/${service.slug}`}>
          <span className=" hover:bg-gray-600x ">{service.title}</span>
        </Link>
        {hasSubservices && (
          <span onClick={toggleSubservices} className=" text-xl">
            {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </span>
        )}
      </div>
      {isOpen && hasSubservices && (
        <div className="ml-4 mt-1 flex flex-col space-y-2 ">
          {service.subservices.map((subservice) => (
            <ServiceItem key={subservice._id} service={subservice} />
          ))}
        </div>
      )}
    </div>
  );
};
