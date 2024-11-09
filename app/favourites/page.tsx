import { Favourite} from "@/types/Image.interface";
import { api } from "@/lib/axios";
import FavouriteCard from "@/components/FavouriteCard";
async function loadFavoriteBobbys (){
  
  try {
  const {data} = await api.get<Favourite[]>("/favourites");

  return data;
} catch (error) {
  console.log(error);
}
};
async function FavouritesPage() {
const favourites:Favourite[] | undefined = await loadFavoriteBobbys();


  return (
   
    <div className="mx-auto max-w-fit">
      <h1>
      Favourites</h1>

      <div className="grid md:grid-cols-3   sm:grid-cols-2  xs:grid-cols-1 lg:grid-cols-4 gap-3 w-full  ">
    {favourites?.map((favourite) => (
      favourite && <FavouriteCard favourite={favourite} key={favourite.id} />
       ))}
     </div>
   </div>
   )}
export default FavouritesPage