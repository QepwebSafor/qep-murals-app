"use client";
import React, { useState } from "react";
import { SafeUser } from "@/types/type";
import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteUser } from "@/actions/user-action";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { Pen, Plus } from "lucide-react";
interface UserProps {
  key: string;
  data: SafeUser;
}
function SingleUser({ key, data }: UserProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    /*    <div
      className="mt-5  max-w-fit mx-auto md:rounded-2xl px-6 font-bold  py-4 shadow-input bg-zinc-700 border border-[#121212]  dark:bg-black"
      key={data.id}
    > */
    <div className="container  mt-5   md:rounded-2xl  shadow-md shadow-black -inset-40  w-full  text-center mx-auto border border-[#121212]  ">
      <h3 className=" text-[1.4rem] hover:text-cyan-800  m-2  ">
        {data.name}
      </h3>{" "}
      <Image
        src={data.image || avatarPlaceholder}
        alt={data.name}
        width={250}
        height={250}
        priority
        className="object-contain mx-auto mb-4 w-auto rounded-sm "
      />
      {/* <p className="m-1 truncate text-sm leading-5 ">Id: {data.id}</p> */}
      <h5 className="m-1 truncate text-sm leading-5 ">{data.email}</h5>
     
        <h5>
          <span>Desde:</span>
          {data.createdAt}
        </h5>
        <div className="flex justify-around gap-4 m-3  ">
        <Button
          size={"icon"}
          variant={"destructive"}
          onClick={async () => {
            setLoading(true);
            await deleteUser({ id: data.id });
            setLoading(false);
          }}
        >
          {loading ? <Spinner /> : <Trash size={16} />}
        </Button>
        <Button
          onClick={() => router.push(`/admin/users/${data.id}`)}
          className=" cursor-pointer text-[1.2rem] text-zinc-900 hover:text-white bg-blue-500"
        >
          {loading ? <Spinner /> : <Pen size={16} />}
        </Button>
      </div>
    </div>
  );
}

export default SingleUser;
