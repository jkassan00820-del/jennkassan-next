export default function Footer() {
  return (
    <footer className="bg-[#183A2A] px-6 py-10 text-[#F7F2E9]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-serif text-xl tracking-wide">
            FIGURING IT OUT™
          </p>

          <p className="mt-1 text-sm italic text-[#D7B56D]">
            Choosing to keep moving.
          </p>
        </div>

        <p className="text-xs text-white/70">
          © 2026 Jenn Kassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}