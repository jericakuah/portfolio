"use client";

import Navbar from "@/components/navbar";

import Hero from "./page/Hero";
import Backstory from "./page/Backstory";
import Hobbies from "./page/Hobbies";
import Tools from "./page/Tools";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-sans">
      <Navbar />
      <main className="flex w-full max-w-6xl flex-col items-center px-8 py-32">
        <Hero />

        <div className="flex flex-col gap-12 w-full">
          <Backstory />

          <Hobbies />

          <Tools />
        </div>
      </main>
    </div>
  );
}
