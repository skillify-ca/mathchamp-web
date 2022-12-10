import Link from "next/link";
import { useAuth } from "../lib/authContext";

export type NavbarLink = {
  name: string;
  href?: string;
  onClick?: () => void;
};

export default function CourseNavbar() {
  const { signIn, signOut } = useAuth();

  const navbarLinks = [
    { name: "Practice", href: `/` },
    { name: "Games", href: `/games` },
    { name: "Stats", href: `/stats` },
    { name: "Log In", onClick: signIn },
    { name: "Log Out", onClick: signOut },
  ];
  return (
    <header className="bg-slate-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-center w-full sm:justify-between">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full lg:flex">
              {navbarLinks.map((link) => (
                <div onClick={link.onClick} className="cursor-pointer">
                  <a key={link.name} href={link.href} className="">
                    <div className="p-6 text-base font-medium text-white transition-all transform border-b-4 hover:text-slate-500 hover:border-charmander border-slate-800 hover:text-charmander">
                      {link.name}
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="py-4">
              <Link href="/">
                <img src="/images/logo.png" className="h-12 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-wrap justify-center hidden py-4 space-x-6 sm:flex lg:hidden">
          {navbarLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-800 hover:text-slate-500"
            >
              <div onClick={link.onClick}>{link.name}</div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
