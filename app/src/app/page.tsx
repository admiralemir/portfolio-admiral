const projectItems = [
  {
    title: "E-Commerce Admin Dashboard",
    desc: "Manajemen produk, order, dan analytics dengan fokus performa dan UX.",
    stack: "Next.js, TypeScript, PostgreSQL",
  },
  {
    title: "Booking Platform API",
    desc: "REST API modular dengan auth, payment flow, dan role-based access.",
    stack: "Node.js, Express, Prisma",
  },
  {
    title: "Company Profile CMS",
    desc: "Landing page + panel konten yang mudah dikelola non-teknis.",
    stack: "Next.js, Tailwind, Supabase",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f2f2f0] text-[#121212]">
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[#d9dfd8] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-[#dfe3ea] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-8 md:px-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#5d5d5d]">Fullstack Developer</p>
            <h1 className="mt-1 text-lg font-semibold tracking-tight">Admiral Nursyafaat's Portfolio</h1>
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#6b6b6b]">
              Jakarta, Indonesia
            </p>

            <h2 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              I turn ideas into
              <br />
              fast, scalable
              <br />
              web applications
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#424242] md:text-lg">
              Saya seorang Fullstack Developer yang berfokus membangun aplikasi web end-to-end
              dengan performa tinggi, arsitektur yang scalable, dan pengalaman pengguna yang optimal.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-sm border border-[#1a1a1a] bg-[#1a1a1a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-transparent hover:text-[#1a1a1a]"
              >
                View My Work
              </a>

              <a
                href="#about"
                className="rounded-sm border border-[#1a1a1a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-[#1a1a1a] hover:text-white"
              >
                About Me
              </a>

              <a
                href="#contact"
                className="rounded-sm border border-[#1a1a1a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-[#1a1a1a] hover:text-white"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-[#d0d0d0] bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-[#666]">
                Core Focus
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4">
                  <p className="text-2xl font-semibold">Frontend</p>
                  <p className="mt-2 text-sm text-[#545454]">
                    Building responsive and user-friendly interfaces using modern web technologies
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4">
                  <p className="text-2xl font-semibold">Backend</p>
                  <p className="mt-2 text-sm text-[#545454]">
                    Developing APIs and handling data to support smooth and reliable application features
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4 sm:col-span-2">
                  <p className="text-2xl font-semibold">Deployment</p>
                  <p className="mt-2 text-sm text-[#545454]">
                    Deploying and managing web applications so they can run properly and be accessed online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 border-t border-[#d8d8d8] pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#666]">About Me</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3f3f3f] md:text-lg">
            <p>
              I am a Bachelor of Information Systems graduate from Universitas Gunadarma with a strong interest in software development. Currently, I am expanding my skills through an AI-Enhanced Fullstack JavaScript Bootcamp at Hacktiv8, where I build scalable and modern web applications using industry-relevant technologies.
            </p>
            <br />
            <p>
              I enjoy solving problems, writing clean and maintainable code, and continuously learning new technologies. My focus includes frontend and backend development, as well as integrating AI features into web applications to create smarter and more efficient digital solutions.
            </p>
            <br />
            <p>
              I am open to opportunities in Frontend, Backend, or Fullstack Development where I can contribute, grow, and create impactful products.
            </p>
          </p>
        </section>

        <section id="projects" className="mt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#666]">My Projects</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projectItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#d6d6d6] bg-white p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#575757]">{item.desc}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#6a6a6a]">{item.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-16 border-t border-[#d8d8d8] pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#666]">Portfolio Actions</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="rounded-sm border border-[#1a1a1a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-[#1a1a1a] hover:text-white"
            >
              Download CV
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-[#1a1a1a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-[#1a1a1a] hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/username"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-[#1a1a1a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-[#1a1a1a] hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="contact" className="mt-16 border-t border-[#d8d8d8] pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#666]">Contact</p>
          <p className="mt-3 text-sm text-[#4a4a4a]">
            Email: yourname@email.com
          </p>
          <p className="text-sm text-[#4a4a4a]">
            WhatsApp: +62xxxxxxxxxx
          </p>
        </section>
      </div>
    </main>
  );
}
