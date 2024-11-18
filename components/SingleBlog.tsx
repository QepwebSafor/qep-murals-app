"use client";
import { useState } from "react";
import Image from "next/image";
import { SafeListing, SafeUser } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import ModalImg from "@/components/ModalImg";

interface BlogProps {
  key: string;
  data: SafeListing;
  currentUser?: SafeUser | null;
 
}

export default function SingleBlog({ key, data, currentUser }: BlogProps) {
  const [isModalImgOpen, setModalImgOpen] = useState(false);
  const router = useRouter();

  const onLike = () => {
    axios
      .post(`/api/like/${data.id}`)
      .then(() => {
        router.refresh();
      })
      .catch((error) => {})
      .finally(() => {});
  };

  const onDelete = () => {
    axios
      .delete(`/api/blogs/${data.id}`)
      .then(() => {
        router.refresh();
      })
      .catch((error) => {})
      .finally(() => {});
  };

  const openModalImg = () => {
    setModalImgOpen(true);
  };
  const closeModalImg = () => {
    setModalImgOpen(false);
  };

  return (
    <div className="w-full max-w-xs mx-auto border shadow-md min-w-300 sm:max-w-xs border-zinc-700 shadow-black">

      <div onClick={openModalImg} className="border cursor-pointer border-zinc-900">
        <Image
          width={262}
          className="object-contain w-fit"
          height={262}
          src={data.imageSrc}
          alt="Blog Image "
        />
     </div>
      <div className="items-center justify-between m-4 ">
        <div className="w-[530px] flex flex-col  leading-[1.5]">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>

        {data.userId === currentUser?.id && (
          <div className="flex items-center gap-4 mt-4 ">
            <RiDeleteBin5Line
              onClick={onDelete}
              className=" cursor-pointer text-[1.5rem] text-red-700"
            />
            <BsFillPencilFill
              onClick={() => router.push(`/blogs/${data.id}`)}
              className=" cursor-pointer text-[1.2rem] text-green-500"
            />
            {/* <button className="px-6 py-2 bg-red-400" onClick={onDelete}>Delete</button> */}
            {/* <button className="px-6 py-2 bg-yellow-400" onClick={() => router.push(`/blogs/${data.id}`)}>Edit</button> */}
          </div>
        )}
   
   {isModalImgOpen && (
        <ModalImg imageUrl={data.imageSrc} onClose={closeModalImg} />
      )}
      </div>
   </div>
  );
}
