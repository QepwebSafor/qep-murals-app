import { ImageUpload } from "@/types/Image.interface";
import Image from "next/image";
interface Props {
  data: ImageUpload;
}

function ResponseDisplay(props: Props) {
  const { id, url, width, height, original_filename, pending, approved } =
    props.data;
  return (
    <div className="w-fit border flex-wrap  sm:max-w-xs  xs:max-w-xs  items-center   bg-white shadow-md shadow-black  border-lime-800 py-4 px-4 mx-auto   ">
         <p>Your image {original_filename} has been upload</p>
      <Image
        src={url}
        alt={original_filename}
        width={256}
        height={256}
        className=" w-auto object-top  mb-4 mt-5 border  border-lime-800 border-double  shadow-md shadow-black"
      />

   
      <p>
        <span>id: </span>
        {id}
      </p>
      <p>
        <span>Url: </span>
        {url}
      </p>
      <p>
        <span>Width: </span>
        {width}
      </p>
      <p>
        <span>Height: </span> {height}
      </p>
      <p>
        <span>Original Name: </span> {original_filename}
      </p>
      <p>
        <span>Pending: </span>
        {pending}
      </p>
      <p>
        <span>Approved: </span> {approved}
      </p>
    </div>
  );
}

export default ResponseDisplay;
