import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F5F1E8] flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <p className="uppercase tracking-[0.35em] text-sm text-[#234531] mb-4">
            Jenn Kassan
          </p>

          <h1 className="font-serif text-6xl lg:text-7xl text-[#5A2346] leading-tight">
            FIGURING IT OUT
          </h1>

          <h2 className="mt-4 text-2xl italic text-[#C89D4A]">
            Finding Clarity in the Chaos
          </h2>

          <p className="mt-10 text-xl leading-9 text-[#2C2C2C] max-w-xl">
            Helping people figure things out so they can move forward with confidence.

            <br /><br />

            Through curiosity, storytelling, technology, and a lifelong love of learning,
            I turn complexity into clarity.

          </p>

          <button className="mt-12 rounded-full bg-[#234531] text-white px-8 py-4 text-lg hover:scale-105 transition duration-300">

            Start the Journey →

          </button>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/hero/hero.jpg"
              alt="Jenn Kassan"
              width={700}
              height={850}
              className="object-cover w-full h-auto"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}