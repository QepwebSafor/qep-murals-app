import { auth } from "@/auth";
import getUsers from "@/actions/getUsers";
import SingleUser from "@/components/SingleUser";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Users List",
};
const AdminPage = async () => {
  const users = await getUsers();
  const session = await auth();
const user = session?.user;
  console.log(session);

  if (session?.user?.role !== "ADMIN") {
    return <div>No eres administrador</div>;
  }

  return (
    <div className="mx-auto max-w-fit">
    <h1> Lista de Usuarios</h1>
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
    {users.map((item: any) => ( user &&
          (<SingleUser key={item.id} data={item} />)
        ))}
    </div>
  </div>
  );
};
export default AdminPage;
