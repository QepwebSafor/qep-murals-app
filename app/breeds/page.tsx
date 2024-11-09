import React from "react";

import { api } from "@/lib/axios";
import { Breed } from "@/types/Image.interface";
import BreedCard from "@/components/BreedCard";
async function loadBreeds() {
  try {
    const { data } = await api.get<Breed[]>("/breeds?limit=172");
    await  new Promise((resolve)=> setTimeout(resolve, 3000))
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function BreedsPage() {
  const breeds: Breed[] | undefined = await loadBreeds();

  return (
    
    <div className="mx-auto max-w-fit">
    <h1>
      Dogs by breeds</h1>

      <div className="grid md:grid-cols-3   sm:grid-cols-2  xs:grid-cols-1 lg:grid-cols-4 gap-3 w-full  ">
        {breeds?.map(
          (breed) => breed && <BreedCard breed={breed} key={breed.id} />
        )}
      </div>
    </div>
   
  );
}

export default BreedsPage;
