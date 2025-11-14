import Image from "next/image";

import { Card } from "@/components/ui/card";

export default function Blogs() {
  return (
    <div id="blogs" className="flex flex-col gap-8 scroll-mt-24">
      <h2 className="sm:text-4xl text-xl font-bold italic">blogs</h2>

      <p className="font-mono italic">
        I like sharing what I&apos;m learning along the way — from design ideas
        and personal reflections to lessons from building projects. Writing
        helps me slow down, connect the dots, and stay curious about the world
        around me.
      </p>

      <div className="flex flex-row gap-8">
        <a
          className="hover:underline cursor-pointer"
          href="https://jericakuah.substack.com/p/the-edge-theory-in-ai-design?utm_source=portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="p-0 border-none bg-transparent shadow-none">
            <div className="flex flex-row gap-6 items-center">
              <Image
                src="/images/blogs/til-substack-logo.png"
                alt="TIL Substack Logo"
                width={100}
                height={100}
                className="flex-shrink-0"
              />

              <div className="flex flex-col gap-2">
                <p className="text-foreground text-xl font-mono font-bold">
                  The Edge Theory in AI Design
                </p>
                <p className="text-foreground text-md font-mono">
                  Estimated reading time: 6 minutes
                </p>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </div>
  );
}
