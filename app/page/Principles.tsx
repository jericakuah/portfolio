export default function Principles() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="sm:text-4xl text-xl font-bold italic">
        my guiding principles
      </h2>

      <p className="font-mono italic">
        I have always been curious about what helps people grow and feel
        connected. These principles remind me to design with empathy, live with
        intention, and keep learning along the way.
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-accent font-mono text-2xl font-bold">empathy</p>
          <p className="font-mono">
            I always try to see things from the user point of view and design in
            a way that makes them feel{" "}
            <span className="font-bold italic">understood</span> and supported.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-accent font-mono text-2xl font-bold">curiosity</p>
          <p className="font-mono">
            Being curious helps me learn,{" "}
            <span className="font-bold italic">stay playful</span> and find
            better ways to solve problems.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-accent font-mono text-2xl font-bold">clarity</p>
          <p className="font-mono">
            Good design feels simple and clear, helping people{" "}
            <span className="font-bold italic">feel confident</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-accent font-mono text-2xl font-bold">discipline</p>
          <p className="font-mono">
            I believe in{" "}
            <span className="font-bold italic">quiet consistency</span>. Small,
            structured steps each day lead to real progress.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-accent font-mono text-2xl font-bold">growth</p>
          <p className="font-mono">
            I treat every project as a step toward growth and{" "}
            <span className="font-bold italic">improvement</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-accent font-mono text-2xl font-bold">impact</p>
          <p className="font-mono">
            My goal is to design with{" "}
            <span className="font-bold italic">purpose</span> and make a
            positive difference in people&apos;s lives.
          </p>
        </div>
      </div>
    </div>
  );
}
