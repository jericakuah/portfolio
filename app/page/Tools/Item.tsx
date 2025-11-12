import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

type Props = {
  imageSrc: string;
  title: string;
};

export default function Item({ imageSrc, title }: Props) {
  return (
    <Card className="p-0 font-mono border-none bg-transparent gap-2 w-[120px] items-center justify-center">
      <Image src={imageSrc} alt={title} width={120} height={120} />
      <CardContent className="flex flex-col gap-2 p-0">
        <p className="text-foreground text-md font-mono">{title}</p>
      </CardContent>
    </Card>
  );
}
