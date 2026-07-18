import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4EC]/90 backdrop-blur-md border-b border-[#E8DDC8]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">

          <Image
            src="/images/brand/fio-logov2.png"
            alt="Figuring It Out"
            width={54}
            height={54}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />

          <div>

            <h1 className="font-serif text-[34px] tracking-[0.08em] leading-none text-[#214534]">
              FIGURING IT OUT<span className="align-top text-xs">™</span>
            </h1>

            <p className="uppercase tracking-[0.45em] text-[10px] mt-1 text-[#7A6B55]">
              Jenn Kassan
            </p>

          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-12 font-light text-[17px] text-[#214534]">

          <Link
            href="/"
            className="relative transition hover:text-[#C89D4A]"
          >
            Home
          </Link>

          <Link
            href="/personal"
            className="relative transition hover:text-[#C89D4A]"
          >
            Personal
          </Link>

          <Link
            href="/professional"
            className="relative transition hover:text-[#C89D4A]"
          >
            Professional
          </Link>

          <Link
            href="/about"
            className="relative transition hover:text-[#C89D4A]"
          >
            About
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-lg bg-[#214534] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#2E5A43] hover:-translate-y-0.5 hover:shadow-lg"
        >
          Let's Connect
        </Link>

      </div>
    </header>
  );
}