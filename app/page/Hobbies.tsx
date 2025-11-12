import Item from "./Hobbies/Item";

export default function Hobbies() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="sm:text-4xl text-xl font-bold italic">hobbies</h2>

      <div className="flex flex-row gap-16 flex-wrap">
        <Item
          imageSrc="/images/cafes.png"
          title="visiting cafes"
          description="go-to drink: latte with oatmilk"
        />
        <Item
          imageSrc="/images/reading.png"
          title="reading books"
          description="list of my fav books here"
        />
        <Item
          imageSrc="/images/photography.png"
          title="photography"
          description="my current camera: M50 Mark II"
        />
        <Item
          imageSrc="/images/exercise.png"
          title="exercise classes"
          description="lagree, pilates, spin, HIIT"
        />
        <Item
          imageSrc="/images/cooking.png"
          title="cooking"
          description="go-to-meal: enoki pork rolls"
        />
        <Item
          imageSrc="/images/hiking.png"
          title="hiking"
          description="last hike: Algonquin Centennial Ridge"
        />
      </div>
    </div>
  );
}
