import { MailIcon } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-8 scroll-mt-24">
      <h2 className="sm:text-4xl text-xl font-bold italic">say hi!</h2>
      <p className="font-mono">
        Thank you for stopping by!
        <br />
        If something here caught your eye or you&apos;d like to connect,
        I&apos;d love to hear from you. You can say hi, share an idea or just
        drop a note - I always enjoy a good conversation.
      </p>

      <a
        href="mailto:jericakuah99@gmail.com?subject=Hello!&body=Hi! I'd love to connect."
        className="w-fit hover:underline"
      >
        <div className="flex flex-row items-center gap-2 text-accent font-bold italic text-lg brightness-125">
          <MailIcon className="w-6 h-6" />
          click here to say hello :]
        </div>
      </a>

      <Image
        src="/images/mural.png"
        alt="Mural"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
    </div>
  );
}
