"use client";
import Image from "next/image";
import { api } from "@/lib/axios";
import { Favourite } from "@/types/Image.interface";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
async function deleteFavouriteBobby(id: number) {
  await api.delete(`/favourites/${id}`);

  console.log("Delete");
}
interface RandomCardProps {
  favourite: Favourite; // Definimos la prop 'task' y su tipo
}

const FavouriteCard: React.FC<RandomCardProps> = ({ favourite }) => {
  const router = useRouter();
  const onDeleteFavorite = async (id: number) => {
    await deleteFavouriteBobby(id);
    router.refresh();
  };
  return (
    <div className=" max-w-fit   items-center  " key={favourite.id}>
      <Image
        src={favourite.image.url}
        width="320"
        alt={favourite.image_id}
        height="320"
        key={favourite.id}
        className=" object-top  rounded-sm border border-double border-black shadow-md shadow-black  "
      />
      <div className=" mx-auto flex  justify-center mt-6">
        <Button onClick={() => onDeleteFavorite(favourite.id)}>
          Delete from favourite
        </Button>
      </div>
    </div>
  );
};

export default FavouriteCard;
