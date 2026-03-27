const projectItems = [
  {
    title: "Car Rent for Employee",
    desc: "Developed a role-based internal car rental management system with employee booking and approval workflows.",
    stack: "React.js, Express.js, Google-gen AI, Google OAuth",
  },
  {
    title: "SubTrack8",
    desc: "Collaborated in a team to develop a full-stack subscription management platform using Next.js and MongoDB.",
    stack: "Next.js, React.js, Socket.IO, MongoDB",
  },
  {
    title: "HackQuiz8",
    desc: "Built a server-rendered learning platform using MVC architecture with session-based authentication.",
    stack: "Node.js, EJS, Sequelize, Json Web Token (JWT)",
  },
];

const focusItems = [
  {
    title: "Frontend",
    desc: "Building responsive and user-friendly interfaces using modern web technologies",
  },
  {
    title: "Backend",
    desc: "Developing APIs and handling data to support smooth and reliable application features",
  },
  {
    title: "Deployment",
    desc: "Deploying and managing web applications so they can run properly and be accessed online",
  },
];

const stars = [
  { size: "h-1 w-1", top: "8%", left: "16%", delay: "0s" },
  { size: "h-1.5 w-1.5", top: "18%", left: "78%", delay: "1.3s" },
  { size: "h-1 w-1", top: "38%", left: "64%", delay: "0.7s" },
  { size: "h-2 w-2", top: "66%", left: "84%", delay: "1.8s" },
  { size: "h-1 w-1", top: "82%", left: "28%", delay: "0.4s" },
  { size: "h-1.5 w-1.5", top: "56%", left: "7%", delay: "1.1s" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#e8f0ff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(30,64,175,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.25),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

      {stars.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className={`pointer-events-none absolute ${star.size} rounded-full bg-white/85 animate-pulse`}
          style={{ top: star.top, left: star.left, animationDelay: star.delay }}
        />
      ))}

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-8 md:px-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-200/15 bg-[#0a1030]/60 px-5 py-4 shadow-[0_10px_40px_rgba(2,8,30,0.5)] backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-blue-200/75">Fullstack Developer</p>
            <h1 className="mt-1 text-lg font-semibold tracking-tight text-white">Admiral Nursyafaat's Portfolio</h1>
          </div>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-blue-100/70">Jakarta, Indonesia</p>

            <h2 className="max-w-lg bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[1.06] tracking-tight text-transparent">
              I turn ideas into fast,
              <br />
              scalable web
              <br />
              applications
            </h2>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="rounded-lg border border-blue-200/35 bg-blue-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-100 transition hover:border-blue-200/60 hover:bg-blue-300/15"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-blue-200/30 bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-blue-200/35 bg-blue-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-100 transition hover:border-blue-200/60 hover:bg-blue-300/15"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="pointer-events-none absolute -inset-7 rounded-full border border-blue-300/25 opacity-60 animate-[spin_24s_linear_infinite]" />
            <div className="pointer-events-none absolute -inset-3 rounded-full border border-cyan-300/30 opacity-75 animate-[spin_18s_linear_infinite_reverse]" />

            <div className="relative rounded-3xl border border-blue-200/20 bg-[#0a143d]/80 p-6 shadow-[0_20px_60px_rgba(2,8,30,0.65)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.18em] text-blue-200/75">Core Focus</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {focusItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group/card relative overflow-hidden rounded-2xl border border-blue-100/15 bg-[linear-gradient(145deg,rgba(20,35,90,0.62),rgba(8,13,42,0.84))] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/55 hover:shadow-[0_14px_36px_rgba(56,189,248,0.22)] ${index === 2 ? "sm:col-span-2" : ""
                      }`}
                  >
                    <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl transition duration-500 group-hover/card:scale-125" />
                    <div className="pointer-events-none absolute -left-8 -bottom-10 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl transition duration-500 group-hover/card:scale-125" />
                    <p className="text-2xl font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-blue-100/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 rounded-3xl border border-blue-200/15 bg-[#0b1234]/70 p-8 backdrop-blur">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200/70">About Me</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-cyan-200/80">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">fullstack development</span>
              <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1">building web applications</span>
              <span className="rounded-full border border-indigo-300/30 bg-indigo-300/10 px-3 py-1">continuous learning</span>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-12">
            <article className="rounded-2xl border border-blue-200/15 bg-[#0f1a4a]/70 p-6 lg:col-span-7">
              <p className="text-base leading-relaxed text-blue-50/90 md:text-lg">
                I am a Fullstack Developer who focuses on building end-to-end web applications with high performance, scalable architecture, and intuitive user experiences. I enjoy transforming ideas into real, functional products while ensuring that every part of the system — from frontend to backend — works efficiently and reliably.
              </p>
              <p className="mt-4 text-base leading-relaxed text-blue-50/85 md:text-lg">
                I am a Bachelor of Information Systems graduate from Universitas Gunadarma with a strong interest in software development. Currently, I am expanding my skills through an AI-Enhanced Fullstack JavaScript Bootcamp at Hacktiv8, where I build modern and scalable web applications using industry-relevant technologies.
              </p>
            </article>

            <aside className="space-y-4 lg:col-span-5">
              <div className="rounded-2xl border border-blue-200/15 bg-[#101d52]/75 p-5 transition hover:border-cyan-300/45">
                <p className="text-[12px] uppercase tracking-[0.16em] text-cyan-200/75">What I Enjoy</p>
                <p className="mt-2 text-base md:text-md leading-relaxed text-blue-55/85">
                  I enjoy solving problems, writing clean and maintainable code, and continuously learning new technologies. My focus includes both frontend and backend development, as well as integrating AI features into web applications to create smarter and more efficient digital solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200/15 bg-[#101d52]/75 p-5 transition hover:border-cyan-300/45">
                <p className="text-[12px] uppercase tracking-[0.16em] text-cyan-200/75">Open To</p>
                <p className="mt-2 text-base md:text-md leading-relaxed text-blue-55/85">
                  I am open to opportunities where I can contribute my skills and grow as a developer, and I am excited to connect with others in the tech community to share knowledge and collaborate on innovative projects.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="mt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">My Projects</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projectItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-blue-200/20 bg-[#0b1234]/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/65 hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                  {item.desc}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-cyan-200/80">
                  {item.stack}
                </p>
                <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-16 rounded-3xl border border-blue-200/15 bg-[#0b1234]/70 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">Portfolio Actions</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/CV_Admiral-Nursyafaat.pdf"
              download
              className="rounded-lg border border-blue-200/35 bg-blue-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-50 transition hover:border-blue-100/60 hover:bg-blue-300/20"
            >
              Download CV
            </a>
            <a
              href="https://github.com/admiralemir"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-blue-200/35 bg-blue-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-50 transition hover:border-blue-100/60 hover:bg-blue-300/20"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/admiral-nurysafaat/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-blue-200/35 bg-blue-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-50 transition hover:border-blue-100/60 hover:bg-blue-300/20"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="contact" className="mt-16 border-t border-blue-200/20 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">Contact</p>
          <p className="mt-3 text-sm text-blue-100/85">Email: admiral.nursyafaat@gmail.com</p>
          <p className="text-sm text-blue-100/85">WhatsApp: +62 878-7847-4306</p>
        </section>
      </div>
    </main>
  );
}
