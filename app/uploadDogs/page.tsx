"use client";
import React, { useState, useEffect } from "react";
import { api } from "@/lib/axios";
import { ImageUpload } from "../../types/Image.interface";
import { useRef } from "react";
import ResponseDisplay from "@/components/ResponseDisplay";
import { Button } from "@/components/ui/button";
const uploadBobbyPhoto = async (formData: FormData) => {
  try {
    const { data } = await api.post("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
        //'Content-Type':  'video/mp4',
      }
    });
    console.log("File", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
const UploadImage = () => {
  const [fileUpload, setFileUpload] = useState<ImageUpload | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fileInputRef.current && fileInputRef.current.files) {
      console.log("files", fileInputRef.current.files[0]);
      const file = fileInputRef.current.files[0];
      const formData = new FormData();
      formData.append("file", file);

      console.log("formData", formData);
      const fileUpload = await uploadBobbyPhoto(formData);
      console.log("response", fileUpload);

      setFileUpload(fileUpload);
    }
  };

  return (
    <>
      <div className="w-full  sm:w-fit md:w-fit lg:w-fit  m-4 p-1 shadow-md shadow-black min-w-400 mx-auto rounded-md ">
        <header className="text-black">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col  px-3 py-3 m-2  rounded-md  mb-4 border border-lime-800">
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="form-control-file d-none rounded-md form-control "
              />

              <div className="text-right">
                <Button type="submit">Upload your image</Button>
              </div>
            </div>
          </form>
        </header>
      </div>
      <div className="items-right w-full">
        {fileUpload ? <ResponseDisplay data={fileUpload} /> : <p>...</p>}
      </div>
    </>
  );
};

export default UploadImage;
