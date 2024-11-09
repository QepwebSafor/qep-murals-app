

import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import {  UserRound, UserRoundPlus , MessageCircle, Dog , PawPrint } from "lucide-react";
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
    <nav className="bg-lime-700  ">
      <div className="container  flex  ">
      <Link href="/">
          <div className=" flex-shrink-0 flex items-center">
            <Image
              src="/img/pnglogoxxxs.fw.png"
              alt="Esoma"
              width={44}
              height={44}
              className="navbar-brand w-auto"
            />

            {currentUser ? (
              <h3 className="px-3 py-6">Hola, {currentUser.name}</h3>
            ) : (
              <h3 className="px-3 py-6">QEP Dogs App</h3>
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
        <Button size="icon" className="flex-none rounded-full  ">
          <Image
            src={avatarPlaceholder}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full  object-cover "
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/login">
              <UserRound className="mr-2 h-4 w-4" />
              Acceso
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/register">
              <UserRoundPlus className="mr-2 h-4 w-4" />
              Registro
            </Link>
          </DropdownMenuItem>
      
      
        <DropdownMenuItem asChild>
            <Link href="/contact">
            <MessageCircle  className="mr-2 h-4 w-4" />
              Contacto
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/breeds">
            <Dog   className="mr-2 h-4 w-4" />
              Breeds
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/random">
            <PawPrint   className="mr-2 h-4 w-4" />
              Random
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Navbar;
