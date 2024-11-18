import SingleBlog from "@/components/SingleBlog";
import getBlogs from "@/actions/getBlogs";
import getCurrentUser from "@/actions/getCurrentUser";

export default async function HomePage() {
  const currentUser = await getCurrentUser();

  const blogs = await getBlogs();

  return (
    <div className="flex items-center justify-between m-4">
      <div className="grid gap-3 mx-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {blogs.map((item: any) => (
          <SingleBlog key={item.id} data={item} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
}

