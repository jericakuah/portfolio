"use client";

import { useTheme } from "next-themes";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-sans">
      <Navbar />
      <main className="flex w-full max-w-6xl flex-col items-center px-8 pt-32 min-h-[calc(100vh-120px)]">
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-row gap-8">
            <Button
              variant="link"
              className={`px-0 sm:text-lg text-sm ${
                theme === "anyone" ? "underline" : ""
              }`}
              onClick={() => setTheme("anyone")}
            >
              for anyone
            </Button>
            <Button
              variant="link"
              className={`px-0 sm:text-lg text-sm ${
                theme === "founders" ? "underline" : ""
              }`}
              onClick={() => setTheme("founders")}
            >
              for founders
            </Button>
            <Button
              variant="link"
              className={`px-0 sm:text-lg text-sm ${
                theme === "investors" ? "underline" : ""
              }`}
              onClick={() => setTheme("investors")}
            >
              for investors
            </Button>
          </div>

          <h1 className="sm:text-[84px] text-4xl">hello, my name is Jerica.</h1>

          {theme === "anyone" && (
            <h2 className="sm:text-[50px] text-2xl">
              & i want to make a{" "}
              <span className="font-bold italic text-accent">
                positive impact
              </span>{" "}
              in this world through product design.
            </h2>
          )}

          {theme === "founders" && (
            <h2 className="sm:text-[50px] text-2xl">
              & <span className="font-bold italic text-accent">empathy</span> is
              my superpower..
            </h2>
          )}

          {theme === "investors" && (
            <h2 className="sm:text-[50px] text-2xl">
              & i envision a world where people wake up to{" "}
              <span className="font-bold italic text-accent">
                personalized products
              </span>{" "}
              they love.
            </h2>
          )}
        </div>
      </main>
    </div>
  );
}
