import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4EC]">
      {/* Full map texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0..14]"
        style={{
          backgroundImage: "url('/images/textures/map-texturev2.png')",
        }}
      />

      {/* Soft cream wash for readability */}
      <div className="absolute inset-0 bg-[#F8F4EC]/38" />

      {/* Faded compass artwork on the left */}
      <Image
        src="/images/illustrations/compass-bgv2.png"
        alt=""
        width={430}
        height={430}
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-24 hidden h-auto w-[420px] select-none opacity-[0.035] lg:block"
      />

      {/* Mountain artwork on the right */}
      <Image
        src="/images/illustrations/mountainsv2.png"
        alt=""
        width={560}
        height={430}
        aria-hidden="true"
       className="
absolute
-right-28
top-24
w-[520px]
opacity-[0.15]
"
      />

      {/* Left journey path */}
      <Image
        src="/images/illustrations/travel-path-leftv2.svg"
        alt=""
        width={380}
        height={760}
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-2 hidden h-[760px] w-[360px] select-none opacity-70 md:block"
      />

      {/* Right journey path */}
      <Image
        src="/images/illustrations/travel-path-rightv2.svg"
        alt=""
        width={380}
        height={760}
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-0 hidden h-[760px] w-[360px] select-none opacity-70 md:block"
      />

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-12 text-center sm:pt-10 lg:min-h-[760px] lg:pb-18 lg:pt-8">
        {/* Primary logo */}
        <Image
          src="/images/brand/fio-logov2.png"
          alt="Figuring It Out compass, hourglass, book, leaves, and path logo"
          width={520}
          height={520}
          priority
         className="w-[400px] h-auto lg:w-[480px]"
        />

        {/* Brand title */}
        <h1 className="-mb-2 font-serif text-[3.25rem] leading-none tracking-[0.03em] text-[#173E2C] sm:text-6xl lg:-mt-4 lg:text-[7rem]">
          FIGURING IT OUT
          <sup className="mt-2 align-super text-[11px] tracking-normal sm:text-sm">
            ™
          </sup>
        </h1>

        {/* Divider */}
        <div className="my-5 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-[#C89D4A] sm:w-28" />
          <span className="h-3 w-3 rotate-45 bg-[#C89D4A]" />
          <span className="h-px w-20 bg-[#C89D4A] sm:w-28" />
        </div>

        {/* Main message */}
        <h2 className="font-serif text-[2rem] leading-tight text-[#173E2C] sm:text-4xl lg:text-[3.1rem]">
          Choosing to keep moving
          <span className="mt-1 block italic text-[#A86F24]">
            when life doesn&apos;t make sense.
          </span>
        </h2>

        <p className="mt-5 font-serif text-xl text-[#29372F] sm:text-2xl lg:text-[1.9rem]">
          One philosophy. Two paths.
        </p>

        <Link
          href="#choose-your-path"
          className="mt-7 inline-flex items-center gap-4 rounded-[4px] bg-[#173E2C] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(23,62,44,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5A2346] hover:shadow-[0_14px_30px_rgba(90,35,70,0.2)]"
        >
          Begin Your Journey
          <span className="text-[#D4A64F]" aria-hidden="true">
            ✦
          </span>
        </Link>
      </div>
    </section>
  );
}