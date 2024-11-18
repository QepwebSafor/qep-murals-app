"use client";

import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Input from "@/components/input/Input";
import ImageUpload from "@/components/ImageUpload";

interface InitalStateProps {
  name?: string;
  imageSrc: string;
  description: string;
}

const initialState: InitalStateProps = {
  name: "",
  imageSrc: "",
  description: "",
};

export default function Page() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (event: FormEvent) => {
    setIsLoading(true);

    event.preventDefault();

    axios
      .post("/api/blogs", state)
      .then(() => {
        toast.success("Created successfully");
        router.refresh();
        router.push("/");
        // router.push('/')
      })

      .catch(() => {
        toast.error("Went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  const setCustomValue = (id: any, value: any) => {
    setState((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div className="container bg-zinc-900 px-10 py-4 mt-5 shadow-md shadow-black w-full md:w-3/5 sm:w-2/3 lg:w-2/5 mx-auto">
      <header className="flex justify-between items-center py-4 text-white">
          <h1>Add a new post</h1>
        </header>
        <form onSubmit={onSubmit}>
          <div>
            <ImageUpload
              value={state.imageSrc}
              onChange={(value) => setCustomValue("imageSrc", value)}
            />
          </div>

          <div className="flex flex-col justify-center  min-h-fit mx-auto ">
            <label
              htmlFor="name"
             
            >
              Autor
            </label>
            <Input
              placeholder="Blog header"
              id="name"
              type="text"
              value={state.name}
              name="name"
              onChange={handleChange}
            />{" "}
            <label
              htmlFor="description"
              
            >
              Location
            </label>
            <Input
              big
              placeholder="Blog content or description"
              id="description"
              type="text"
              value={state.description}
              name="description"
              onChange={handleChange}
            />
            <div></div>
            <button
              className="btn btn-primary btn-primary:hover btn-primary:focus btn-primary:disabled ml-auto "
              type="submit"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
   
  );
}
