import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import {
  UserRound,
  UserRoundPlus,
  MessageCircle,
  Clapperboard,
  Search,
  ListEnd
} from "lucide-react";
import Image from "next/image";
import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import UserButton from "./UserButton";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  // Opcional: Si deseas ver cuando se ejecuta la llamada a /api/auth/session

  return (
    <nav className="bg-zinc-900">
      <div className="container  flex  ">
        <Link href="/">
          <div className=" flex-shrink-0 flex items-center m-2">
            <Image
              src="/img/pnglogoxs.fw.png"
              alt="Qep"
              width={44}
              height={44}
              priority
              className="navbar-brand w-auto"
            />

            {currentUser ? (
              <h3 className="px-3 py-6">Hello, {currentUser.name}</h3>
            ) : (
              <h3 className="px-3 py-6">QEP Movies App</h3>
            )}
          </div>
        </Link>

        <div className="flex mt-5  ml-auto ">
          {currentUser ? <UserButton user={currentUser} /> : <SignInButton />}
        </div>
      </div>
    </nav>
  );
};
function SignInButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button   className="flex-none rounded-full  mb-5 ">
          <Image
            src={avatarPlaceholder}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full w-10 h-10  object-cover "
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup>
       
          <DropdownMenuItem asChild>
            <Link href="/movies">
              <Clapperboard className="mr-2 h-4 w-4" />
              Trends
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/categories">
              <ListEnd className="mr-2 h-4 w-4" />
              Categories
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/search">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/login">
              <UserRound className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/register">
              <UserRoundPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact
            </Link>
            </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Navbar;
