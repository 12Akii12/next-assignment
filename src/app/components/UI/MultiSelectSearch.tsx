"use client";

import { indianStates } from "@/Utils/Constant/GlobalConstant";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const MultiSelectSearch = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <MultiSelect
        options={indianStates}
        value={selected}
        onChange={setSelected}
        labelledBy="Select states....."
      />
    </div>
  );
};

export default MultiSelectSearch;
