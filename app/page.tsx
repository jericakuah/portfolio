import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

// TODO: Design for mobile screen sizes as well
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-sans">
      <Navbar />
      <main className="flex w-full max-w-6xl flex-col items-center px-8 pt-32 min-h-[calc(100vh-120px)]">
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-row gap-8">
            <Button variant="link" className="underline px-0 text-lg">
              for anyone
            </Button>
            <Button variant="link" className="px-0 text-lg">
              for founders
            </Button>
            <Button variant="link" className="px-0 text-lg">
              for investors
            </Button>
          </div>

          <h1 className="text-[84px]">hello, my name is Jerica.</h1>

          <h2 className="text-[50px]">
            & i want to make a{" "}
            <span className="font-bold italic">positive impact</span> in this
            world through product design.
          </h2>
        </div>
      </main>
    </div>
  );
}
