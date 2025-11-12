import Item from "./Tools/Item";

export default function Tools() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="sm:text-4xl text-xl font-bold italic">
        techie-tools for work
      </h2>

      <div className="flex flex-row gap-16 flex-wrap">
        <Item imageSrc="/images/figma.png" title="Figma" />
        <Item imageSrc="/images/illustrator.png" title="Illustrator" />
        <Item imageSrc="/images/raycast.png" title="Raycast" />
        <Item imageSrc="/images/granola.png" title="Granola" />
        <Item imageSrc="/images/superhuman.png" title="Superhuman" />
      </div>
    </div>
  );
}
