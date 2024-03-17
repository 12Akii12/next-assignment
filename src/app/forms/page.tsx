import React from "react";
import MultiSelectSearch from "../components/UI/MultiSelectSearch";
import DateRange from "../components/UI/DateRange";
import FileUpload from "../components/UI/FileUpload";
import { FormFields } from "@/Utils/Constant/GlobalConstant";

const FormsPage = () => {
  const renderFormField = (field: any) => {
    switch (field.field) {
      case "multi-select":
        return <MultiSelectSearch key={field.id} />;
      case "date-range":
        return <DateRange key={field.id} />;
      case "upload":
        return <FileUpload key={field.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-[90%] md:w-2/3 flex flex-col items-center bg-white my-4 md:my-10 py-4 md:py-10 px-4 md:px-10 rounded-lg border border-gray-400">
      <h4 className="text-center md:text-base text-sm font-normal md:font-semibold">
        Forms Elements
      </h4>
      <div className="my-3 md:my-6 w-full">
        <div className="my-3 md:my-6 w-full">
          {FormFields.map((field: any) => (
            <div key={field.id} className="flex flex-col md:flex-row w-full py-3">
              <label
                htmlFor={field.field}
                className="w-full md:w-1/4 text-start text-sm md:text-base font-normal"
              >
                {field.label}
              </label>
              <div className="w-full mt-2 md:mt-0">{renderFormField(field)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
