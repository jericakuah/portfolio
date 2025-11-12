import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function Item({ imageSrc, title, description }: Props) {
  return (
    <Card className="p-0 font-mono border-none bg-transparent gap-4 w-[300px]">
      <Image src={imageSrc} alt="cafe hobby" width={300} height={300} />
      <CardContent className="flex flex-col gap-2 p-0">
        <p className="text-foreground text-xl">{title}</p>
        <p className="text-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
