"use client";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import React, { useState } from "react";
import { DateRangePicker, createStaticRanges } from "react-date-range";
import { IoChevronDown } from "react-icons/io5";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";

const DateRange = () => {
  const [isDateRange, setDateRange] = useState(false);
  const [selectionRange, setSelectionRange] = useState<any>({
    key: "selection",
    label: "Select from the list",
  });

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection);
  };

  const hasStartAndEndDates = (obj: any) => {
    return obj.hasOwnProperty("startDate") && obj.hasOwnProperty("endDate");
  };

  const isDateStartEnd = hasStartAndEndDates(selectionRange);

  const handleClickOnReset = () => {
    setSelectionRange({
      key: "selection",
      label: "Select from the list",
    });
    setDateRange(false);
  };

  return (
    <div className="w-full relative">
      <div className="md:w-[703px]">
        <div
          className={`flex items-center justify-between px-2.5 py-2.5 md:px-4 bg-white border border-gray-300 rounded-lg cursor-pointer`}
          onClick={() => {
            setDateRange(true);
          }}
        >
          {selectionRange && (
            <span className="text-xs font-normal truncate md:text-clip md:text-sm text-text-color">
              {isDateStartEnd &&
                `${selectionRange.startDate.toString()} - ${selectionRange.endDate.toString()}`}
              {!isDateStartEnd && selectionRange.label}
            </span>
          )}
          <span className="pl-2">
            <IoChevronDown />
          </span>
        </div>
      </div>
      {isDateRange && (
        <div
          className={`absolute top-10 z-10 bg-white border rounded-md shadow-xl left-4 md:left-0 border-date-range-bottom-border`}
        >
          <div className="flex items-center justify-end pt-3 pb-2 pl-6 pr-3 border-b border-date-range-bottom-border">
            <div className="flex items-center">
              <span className="text-gray-900 cursor-pointer ">
                <FaTimes
                  className="h-4 w-4 "
                  onClick={() => {
                    setDateRange(false);
                  }}
                />
              </span>
            </div>
          </div>
          <DateRangePicker
            ranges={[selectionRange]}
            direction="horizontal"
            rangeColors={["#016956"]}
            className="h-[332px]"
            onChange={handleSelect}
          />
          <div className="flex items-center justify-between px-4 py-2 border-t md:px-6 border-date-range-bottom-border ">
            <div
              onClick={() => {
                handleClickOnReset();
              }}
              className="py-2 text-xs font-normal bg-white cursor-pointer md:px-3 md:text-sm text-[#FF005C]"
            >
              Reset All
            </div>
            <div
              onClick={() => {
                setDateRange(false);
              }}
              className="px-3 py-2 ml-4 text-xs font-normal text-white rounded-md cursor-pointer md:text-sm bg-[#FF005C] hover:bg-[#FF337E]"
            >
              Confirm Dates
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRange;
