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
    <div className="row mx-auto">
   
        <div className="flex w-full items-center overflow-hidden rounded-md  px-4 pt-5   sm:px-4  md:p-6 lg:p-8 mx-auto ">
          <div className="flex  items-stretch justify-center border rounded-md bg-zinc-900 border-zinc-900   md:items-center pr-5 ">
          
              <div className=" aspect-w-2 aspect-h-3 overflow-hidden rounded-lg sm:col-span-7 lg:col-span-5 mx-auto border-gray-900  ">
                <Image
                  src={data.image || avatarPlaceholder}
                  alt={data.name}
                  width={250} 
                  height={250}
                  priority
                  className="object-contain  w-auto rounded-sm "
                />
                </div>
                <div className="sm:col-span-4 lg:col-span-5 ml-2 mt-4 items-stretch ">
                  <div className="flex">
                  <h3 className="  text-white ">
                    <span>Name:</span>  {data.name}
                    </h3>{" "}
                  </div>
                  {/* <p className="m-1 truncate text-sm leading-5 ">Id: {data.id}</p> */}
                  <p>
                  <span>Email:</span>{data.email}
                  </p>

                  <p>
                    <span>Desde:</span>
                    {data.createdAt}
                  </p>
                  <div className="flex  justify-between items-center  mt-6 ">
            
                    <Button
                      onClick={() => router.push(`/admin/users/${data.id}`)}
                     
                    >
                       <Pen size={17}/>
                    </Button>
                    <Button
                      size={"icon"}
                      variant={"destructive"}
                      onClick={async () => {
                        setLoading(true);
                        await deleteUser({ id: data.id });
                        setLoading(false);
                      }}
                    >
                       <Trash size={17} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
  
   
  );
}

export default SingleUser;
