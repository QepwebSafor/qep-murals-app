import React from "react";
import Image from "next/image";
import { Breed } from "@/types/Image.interface";

interface BreedCardProps {
  breed: Breed; // Definimos la prop 'task' y su tipo
}
const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
  return (
    <div
    className="flex-wrap  max-w-xs items-center   bg-white shadow-md shadow-black   " key={breed.id}
    >
     
      <Image
        src={breed.image.url}
        alt={breed.name}
        width={320}
        height={320}
        key={breed.id}
        className="w-auto object-top  rounded-sm "
      />
       <h5 className=" py-3">{breed.name}</h5>
      <div className="px-4 py-3  ">
        <p>{breed.bred_for}</p>
        <p>{breed.breed_group}</p>
        <p>{breed.life_span}</p>
        <p className="flex-wrap max-w-fit ">{breed.temperament}</p>
      </div>
    </div>
  );
};

export default BreedCard;
