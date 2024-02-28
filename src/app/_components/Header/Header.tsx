import { getServerAuthSession } from "~/server/auth";
import Image from "next/image";
import Link from "next/link";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";

export default async function Header() {
  const session = await getServerAuthSession();

  return (
    <header className="bg-dark-midnight text-white sticky top-0 z-40 w-full py-4 duration-300">
      <div className="flex container pl-4 pr-4 md:pl-0 md:pr-0 items-center justify-between mx-auto">
        <Link href='/'>
          <Image
            src="/logos/slugLink.svg"
            alt="SlugLink logo"
            width={40}
            height={40}
          />
        </Link>
        <div className="flex gap-3 items-center">
          <Auth user={session?.user}/>
          <Menu />
        </div>
      </div>
    </header>
  )
}