import { ImageUpload } from "@/types/Image.interface";
import Image from "next/image";
interface Props {
  data: ImageUpload;
}

function ResponseDisplay(props: Props) {
  const { id, url, width, height, original_filename, pending, approved } =
    props.data;
  return (
    <div className="p-4 border  border-lime-800 py-4 px-4 my-7 flex xs:flex-col max-w-fit  mx-auto gap-5 ">
    
 
      <Image
        src={url}
        alt={original_filename}
        width={256}
        height={256}
        className=" object-content mx-auto"
      />
 

     <div className="mx-auto m-6">
     <p>Tu imagen {original_filename} se ha subido al servidor</p>
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
          
        </div>
     
  );
}

export default ResponseDisplay;