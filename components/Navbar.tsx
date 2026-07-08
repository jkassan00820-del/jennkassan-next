export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F2EDE2]/90 backdrop-blur-md border-b border-[#e4ddcf]">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <span className="text-2xl">🧭</span>

          <div>
            <p className="font-serif text-xl text-[#5A2346]">
              FIGURING IT OUT
            </p>

            <p className="text-xs uppercase tracking-[0.35em] text-[#234531]">
              Jenn Kassan
            </p>

          </div>

        </div>

        <div className="hidden md:flex gap-10 text-[#234531]">

          <a href="#">Home</a>

          <a href="#">Story</a>

          <a href="#">Book</a>

          <a href="#">Framework</a>

          <a href="#">Resources</a>

        </div>

      </div>
    </nav>
  );
}