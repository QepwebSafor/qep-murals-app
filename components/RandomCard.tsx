"use client";
import Image from "next/image";
import { api } from "@/lib/axios";
import {ImageB} from "@/types/Image.interface";
import { Button } from "@/components/ui/button";
async function saveFavouriteBobby (id: string)  {
  const {data} = await api.post("/favourites", {
    image_id: id,
  
  });
  console.log(data);
  return data;
};
interface RandomCardProps {
  image: ImageB; // Definimos la prop 'task' y su tipo
}
const RandomCard: React.FC<RandomCardProps> = ({ image }) => {
  const onSaveFavorite = async (id: string) => {
    await saveFavouriteBobby(id);
  };

  return (
    <div
    className="flex-wrap  max-w-xs items-center   "key={image.id}>
      
    <Image
      src={image.url}
      alt={image.id}
      width="320"
      height="320"
      key={image.id}
      unoptimized
      className="w-auto object-cover  rounded-sm border border-double border-black shadow-md shadow-black"
    />
      <div className=" mx-auto flex align-middle justify-center  mt-2">
      
      <Button
       
        onClick={() => onSaveFavorite(image.id)}
      >
        Add to favourite
      </Button>
    </div>
  </div>
  )
}

export default RandomCard