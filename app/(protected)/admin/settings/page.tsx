import { Metadata } from "next";
import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { redirect } from "next/navigation";
import UserEditForm from "@/components/UserEditForm";
import Image from "next/image";
import getCurrentUser from "@/actions/getCurrentUser";
export const metadata: Metadata = {
  title: "Profile",
};

export default async function Page() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <div className="mt-5 md:max-w-fit sm:max-w-fit w-full mx-auto md:rounded-2xl px-11 font-bold shadow-md   py-4 shadow-black  border border-[#121212]   text-black">
      {currentUser?.name && (
        <div className=" justify-between  mx-auto">
          <h2 className="text-2xl p-3">
          {currentUser?.name}{" "}
          </h2>
          <Image
            src={currentUser?.image || avatarPlaceholder}
            alt={currentUser?.name}
            width={200}
            height={200}
            priority
            className="object-contain mx-auto mb-4 w-auto rounded-sm "
          />
          <div className="text-left">
            <h5>
              {" "}
              <span>Email:</span> {currentUser.email}
            </h5>
            <p className="my-2">
              <span className="mr-1 ">Desde:</span>
              {new Date(currentUser.createdAt).toLocaleDateString()}
            </p>
            <p>
              {" "}
              <span className="mr-1 ">Id:</span> {currentUser.id}
            </p>

            {/* <SettingsPage currentUser={currentUser}/> */}
            <UserEditForm
              name={currentUser?.name}
              image={currentUser?.image as string}
              userId={currentUser?.id}
              email={currentUser?.email as string}
            />
          </div>
        </div>
      )}
    </div>
  );
}
