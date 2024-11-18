
import SingleBlog from "@/components/SingleBlog";
import getBlogs from "@/actions/getBlogs";
import getCurrentUser from "@/actions/getCurrentUser";


export default async function MuralsPage() {
 
  const currentUser = await getCurrentUser();

  const blogs = await getBlogs();

  return (
  
    <div  className="items-center justify-between flex m-4">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto ">
        {blogs.map((item: any) => (
        
        <SingleBlog  key={item.id} data={item} currentUser={currentUser} />
     
        ))}
           
      </div>
 
    </div>
  );
}
