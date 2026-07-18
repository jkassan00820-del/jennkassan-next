export default function ChooseYourPath() {
  return (
    <section
      id="choose-your-path"
      className="bg-[#F7F2E9] px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8863B]">
            Where Do You Need Clarity Today?
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#234531]">
            Choose Your Path
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D8CCBA] bg-[#FFFDF8] p-10 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-[#B8863B]">
              Personal
            </p>

            <h3 className="mt-4 font-serif text-4xl text-[#5A2346]">
              Life, Stories &amp; Growth
            </h3>

            <p className="mt-5 leading-7 text-[#4F514B]">
              Discover <em>Chasing Chaos, Finding Home</em>—a collection of
              memories, poems, and stories about grief, motherhood, love,
              identity, and learning to keep moving.
            </p>

            <a
              href="/personal"
              className="mt-7 inline-flex rounded-md bg-[#234531] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Enter Personal Journey →
            </a>
          </article>

          <article className="rounded-3xl border border-[#D8CCBA] bg-[#FFFDF8] p-10 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-[#B8863B]">
              Professional
            </p>

            <h3 className="mt-4 font-serif text-4xl text-[#5A2346]">
              The ODS&apos;s Hourglass of Clarity™
            </h3>

            <p className="mt-5 leading-7 text-[#4F514B]">
              Practical tools, education, and simplified learning for Oncology
              Data Specialists navigating complex registry information.
            </p>

            <a
              href="/professional"
              className="mt-7 inline-flex rounded-md bg-[#67204D] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Enter Professional Path →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}