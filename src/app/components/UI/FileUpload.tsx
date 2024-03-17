"use client";

import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    const timer = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setUploadSuccess(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <label className="cursor-pointer w-full">
        <div className="flex flex-col justify-center items-center border border-gray-300 border-dashed h-28 md:h-40 rounded-md px-4 py-2 w-full">
          <FiUpload />
          <input
            type="file"
            accept="application/pdf, image/png, image/jpeg"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <span className="text-sm md:text-base font-normal md:font-semibold mt-4 md:mt-6">
            {selectedFile ? selectedFile.name : "No file selected"}
          </span>
        </div>
      </label>

      {selectedFile && (
        <div className="flex flex-col items-center w-1/2">
          <button
            onClick={handleUpload}
            className="mt-4 bg-green-500 text-white w-full px-4 py-2 rounded-md text-sm md:text-base font-normal md:font-semibold"
          >
            Upload
          </button>
          <div className="w-full bg-gray-200 h-3 rounded-md mt-4 md:mt-6">
            <div
              className="bg-green-500 h-full rounded-md"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <span className="mt-2">{uploadProgress}%</span>
        </div>
      )}
      {uploadSuccess && (
        <div className="mt-4 bg-green-200 text-sm md:text-base font-normal md:font-semibold text-green-800 px-4 py-2 rounded-md">
          Upload Successful!
        </div>
      )}
    </div>
  );
};

export default FileUpload;
