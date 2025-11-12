import Link from "next/link";

import JericaIcon from "./icons/jerica";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-8 bg-background/80 backdrop-blur-sm">
      <Link href="/">
        <JericaIcon className="w-10 h-10" />
      </Link>
      <div className="items-center gap-4 hidden sm:flex">
        <Link href="#backstory">about</Link>
        <Link href="#hobbies">hobbies</Link>
        <Link href="#tools">tools</Link>
        <Link href="#principles">values</Link>
        <Link href="#contact">say hi!</Link>
      </div>
    </nav>
  );
}
