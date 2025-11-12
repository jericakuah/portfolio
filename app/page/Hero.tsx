"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-full flex flex-col gap-12 min-h-[calc(100vh-200px)]">
      <div className="flex flex-row gap-8">
        <Button
          variant="link"
          className={`px-0 sm:text-lg text-sm hover:text-accent-green ${
            theme === "anyone" ? "underline" : ""
          }`}
          onClick={() => setTheme("anyone")}
        >
          for anyone
        </Button>
        <Button
          variant="link"
          className={`px-0 sm:text-lg text-sm hover:text-accent-orange ${
            theme === "founders" ? "underline" : ""
          }`}
          onClick={() => setTheme("founders")}
        >
          for founders
        </Button>
        <Button
          variant="link"
          className={`px-0 sm:text-lg text-sm hover:text-accent-purple ${
            theme === "investors" ? "underline" : ""
          }`}
          onClick={() => setTheme("investors")}
        >
          for investors
        </Button>
      </div>

      <h1 className="sm:text-[84px] text-4xl">hello, my name is Jerica.</h1>

      {theme === "anyone" && (
        <p className="sm:text-[50px] text-2xl">
          & i want to make a{" "}
          <span className="font-bold italic text-accent">positive impact</span>{" "}
          in this world through product design.
        </p>
      )}

      {theme === "founders" && (
        <p className="sm:text-[50px] text-2xl">
          & <span className="font-bold italic text-accent">empathy</span> is my
          superpower..
        </p>
      )}

      {theme === "investors" && (
        <p className="sm:text-[50px] text-2xl">
          & i envision a world where people wake up to{" "}
          <span className="font-bold italic text-accent">
            personalized products
          </span>{" "}
          they love.
        </p>
      )}
    </div>
  );
}
