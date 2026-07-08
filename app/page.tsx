export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2EDE2] flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">

        <p className="uppercase tracking-[0.35em] text-sm text-[#234531] mb-6">
          Jenn Kassan
        </p>

        <h1 className="text-7xl font-serif text-[#5A2346] leading-tight">
          FIGURING IT OUT
        </h1>

        <h2 className="mt-4 text-3xl italic text-[#C89D4A]">
          Finding Clarity in the Chaos
        </h2>

        <p className="mt-12 text-xl leading-9 text-[#1A1A1A] max-w-3xl mx-auto">
          I've spent my life figuring things out.
          <br />
          <br />
          Not because I had all the answers.
          <br />
          Because I was willing to look for them.
          <br />
          <br />
          Everything I create begins with one hope:
          that someone leaves a little less overwhelmed
          and a little more confident than when they arrived.
        </p>

        <button className="mt-14 rounded-full bg-[#234531] px-10 py-4 text-white text-lg hover:scale-105 transition">
          Start the Journey →
        </button>

      </div>
    </main>
  );
}