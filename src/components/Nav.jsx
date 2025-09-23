import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 justify-end p-4 dark:bg-slate-900 border-b  border-slate-500 dark:border-stone-300">
      <Link
        className=" font-bold p-2 hover:bg-slate-600 hover:rounded-lg hover:text-accent dark:hover:bg-accent-foreground "
        href="/"
      >
        Home
      </Link>
      <Link
        className="font-bold p-2 hover:bg-slate-600 hover:rounded-lg hover:text-accent dark:hover:bg-accent-foreground"
        href="/Login"
      >
        Login
      </Link>
      <ModeToggle></ModeToggle>
    </nav>
  );
};
