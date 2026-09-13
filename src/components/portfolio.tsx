import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronRight,
  Copy,

  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData, type FeaturedProject } from "@/data/portfolio-data";

const d = portfolioData;

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <p className="section-kicker">
      <span className="text-signal">{number}</span> — {children}
    </p>
  );
}

function AssetPlaceholder({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={`asset-placeholder ${compact ? "min-h-40" : "min-h-72 md:min-h-96"}`}>
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <Camera aria-hidden="true" className="size-5 text-signal" />
        <span className="font-mono text-[11px] font-semibold uppercase text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}

function ProjectDialog({ project, children }: { project: FeaturedProject; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-none border-border bg-background p-0 shadow-2xl">
        <div className="border-b border-border p-6 pr-12 md:p-8 md:pr-14">
          <p className="font-mono text-xs font-semibold uppercase text-signal">{project.status}</p>
          <DialogHeader className="mt-3">
            <DialogTitle className="font-display text-3xl font-bold md:text-4xl">{project.name}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">{project.subtitle}</DialogDescription>
         </DialogHeader>
</div>

{project.images?.length ? (
  <div className="grid gap-4 p-6 md:grid-cols-2">
    {project.images.map((image, index) => (
      <div
        key={image}
        className="overflow-hidden border border-border bg-background"
      >
        <img
          src={image}
          alt={`${project.name} screenshot ${index + 1}`}
         className="max-h-[520px] w-full object-contain"
        />
      </div>
    ))}
  </div>
) : null}

<div className="grid gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-6 md:p-8">
            <p className="detail-label">Problem</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.problem}</p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="detail-label">Solution</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.solution}</p>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <p className="detail-label">Project record</p>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 py-3 text-sm text-muted-foreground">
                <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-signal" />
                {feature}
              </li>
            ))}
          </ul>
          {project.tech.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => <span className="tag tag-solid" key={item}>{item}</span>)}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ResumeDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-5xl rounded-none border-border bg-background p-0">
        <DialogHeader className="border-b border-border p-6 pr-12">
          <DialogTitle className="font-display text-2xl">
            Sahala Shana VK — Resume
          </DialogTitle>

          <DialogDescription className="pt-2 leading-6">
            View my latest resume or open the PDF in a new tab.
          </DialogDescription>
        </DialogHeader>

        <div className="h-[70vh]">
          <iframe
            src={d.links.resume}
            title="Sahala Shana VK resume"
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-wrap justify-end gap-3 border-t border-border p-4">
          <Button asChild variant="outline" className="rounded-none">
            <a
              href={d.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
              <ExternalLink aria-hidden="true" className="ml-2 size-4" />
            </a>
          </Button>

          <Button asChild className="rounded-none">
            <a href={d.links.resume} download>
              Download Resume
              <FileText aria-hidden="true" className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Header({ dark, toggleTheme, activeSection }: { dark: boolean; toggleTheme: () => void; activeSection: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:h-20 lg:px-10">
        <a href="#home" className="min-w-0 truncate font-display text-sm font-bold uppercase sm:text-base">Sahala Shana V.K.</a>
        <div className="flex shrink-0 items-center gap-1.5">
          <nav aria-label="Primary navigation" className="mr-3 hidden items-center gap-4 xl:flex">
            {d.navigation.map(([label, id]) => (
              <a className="nav-link" data-active={activeSection === id} href={`#${id}`} key={id}>{label}</a>
            ))}
          </nav>
          <ResumeDialog>
            <Button className="hidden rounded-none border border-foreground bg-foreground px-3 text-xs text-background shadow-none hover:bg-signal hover:text-signal-foreground sm:inline-flex">
              Resume <ArrowDownToLine />
            </Button>
          </ResumeDialog>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} className="rounded-none border border-border">
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-none border border-border xl:hidden" aria-label="Open navigation"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-full rounded-none border-border bg-background sm:max-w-sm">
              <SheetHeader className="border-b border-border pb-6 text-left">
                <SheetTitle className="font-display uppercase">Sahala Shana VK</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="mt-6 flex flex-col">
                {d.navigation.map(([label, id], index) => (
                  <SheetClose asChild key={id}>
                    <a href={`#${id}`} className="flex items-center justify-between border-b border-border py-3 font-display text-lg font-semibold">
                      {label}<span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <ResumeDialog><Button className="mt-8 w-full rounded-none">Resume <ArrowDownToLine /></Button></ResumeDialog>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function Portfolio() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    void navigator.clipboard?.writeText(d.identity.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };


  useEffect(() => {
    const saved = window.localStorage.getItem("sahala-theme");
    const nextDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  useEffect(() => {
    const sections = d.navigation
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("sahala-theme", next ? "dark" : "light");
      return next;
    });
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${d.identity.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header dark={dark} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <section id="home" className="scroll-mt-20 border-b border-border">
          <div className="hero-canvas">
            <span aria-hidden="true" className="hero-watermark">SAHALA</span>
            {[25, 50, 75].map((x) =>
              [220, 440].map((y) => (
                <span aria-hidden="true" key={`${x}-${y}`} className="hero-cross" style={{ left: `calc(${x}% - 7px)`, top: `${y - 7}px` }} />
              )),
            )}
            <div className="section-shell relative z-10 py-14 lg:py-20">
              <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                <div className="col-span-12 lg:col-span-7">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-hero-muted">
                    {d.identity.role} · {d.identity.graduation}
                  </p>
                  <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-[6.4rem]">
                    Sahala<br />Shana VK
                  </h1>
                  <p className="mt-8 max-w-xl font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {d.identity.statement}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-hero-muted">{d.identity.positioning}</p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button asChild className="rounded-none bg-hero-foreground px-5 text-hero hover:bg-foreground hover:text-background">
                      <a href="#projects">View Projects <ArrowRight /></a>
                    </Button>
                    <ResumeDialog>
                      <Button variant="outline" className="rounded-none border-hero-foreground/50 bg-transparent px-5 text-hero-foreground hover:bg-hero-foreground hover:text-hero">
                        Download Resume <ArrowDownToLine />
                      </Button>
                    </ResumeDialog>
                    <Button asChild variant="ghost" className="rounded-none px-5 text-hero-foreground hover:bg-hero-foreground/15 hover:text-hero-foreground">
                      <a href="#contact">Contact Me</a>
                    </Button>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-5 text-hero-foreground">
                    <a className="social-link [&_svg]:text-hero-foreground hover:!text-hero-muted" href={d.links.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
                    <a className="social-link [&_svg]:text-hero-foreground hover:!text-hero-muted" href={d.links.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-5">
                  <div className="hero-card p-2">
                    <div className="aspect-square overflow-hidden border border-hero-rule bg-hero-foreground/10">
                      <img
                        src={d.identity.profilePhoto}
                        alt="Sahala Shana VK — professional portrait"
                        className="h-full w-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 px-3 py-3 font-mono text-[10px] uppercase text-hero-muted">
                      <span className="truncate">Photo badge · Sahala Shana VK</span>
                      <span className="shrink-0">B.Tech IT · 2027</span>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <a href="#projects" className="hero-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 transition-colors hover:bg-hero-foreground hover:text-hero">
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase">Featured work</span>
                        <span className="block truncate font-display text-lg font-semibold">HostelHub</span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
                    </a>
                    <a href="#contact" className="hero-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 transition-colors hover:bg-hero-foreground hover:text-hero">
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 font-mono text-[10px] uppercase">
                          <span className="size-1.5 shrink-0 rounded-full bg-hero-foreground" />
                          {d.identity.availability}
                        </span>
                        <span className="block truncate font-display text-lg font-semibold">Let’s connect</span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="about" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="02">About</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <h2 className="section-title max-w-4xl">Technology first. Design-aware by practice.</h2>
              <div className="mt-8 grid gap-6 border-t border-foreground pt-5 text-base leading-7 text-muted-foreground md:grid-cols-2">
                <p>I am a B.Tech Information Technology student at Government Engineering College Idukki, under APJ Abdul Kalam Technological University, graduating in 2027.</p>
                <p>My interests span software development, web, mobile applications, UI/UX, and emerging AI/ML technologies—with an emphasis on practical, user-friendly outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="03">Areas of focus</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <div className="grid gap-px bg-border md:grid-cols-2">
                {d.focusAreas.map((item, index) => (
                  <article className="group bg-background p-6 md:p-8" key={item.title}>
                    <p className="font-mono text-[10px] text-signal">0{index + 1}</p>
                    <h3 className="mt-8 font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-2 font-mono text-[11px] font-semibold uppercase text-muted-foreground">Exploring</span>
                {d.exploring.map((item) => <span key={item} className="tag tag-outline">{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-b border-border bg-projects py-16 text-projects-foreground lg:py-24">
          <div className="section-shell">
            <div className="editorial-grid">
              <SectionLabel number="04">Featured projects</SectionLabel>
              <div className="col-span-12 md:col-span-9">
                <h2 className="section-title max-w-4xl">Mobile products at the center of my work.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-projects-muted">HostelHub and Gramika are the two primary projects. Screenshots and fuller case-study details will be added when supplied.</p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12">
              {d.featuredProjects.slice(0, 2).map((project, index) => (
                <article className={index === 0 ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-5"} key={project.name}>
                 <div className="project-media h-[420px] flex items-center justify-center overflow-hidden">
  {project.images?.[0] ? (
    <img
      src={project.images[0]}
      alt={`${project.name} screenshot`}
      className="max-h-full max-w-full object-contain"
    />
  ) : (
    <AssetPlaceholder label={`${project.name} screenshot`} />
  )}
</div>
                  <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-t border-projects-rule pt-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-3xl font-bold">{project.name}</h3>
                      <p className="mt-1 text-sm text-projects-muted">{project.subtitle}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] uppercase text-projects-muted">Flutter + Firebase</span>
                  </div>
                  <ProjectDialog project={project}>
                    <Button variant="ghost" className="mt-5 rounded-none border-b border-projects-rule px-0 text-projects-foreground hover:bg-transparent hover:text-signal">View project details <ArrowUpRight /></Button>
                  </ProjectDialog>
                </article>
              ))}
              <article className="col-span-12 grid gap-6 border-t border-projects-rule pt-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-3"><span className="inline-flex border border-signal px-3 py-1 font-mono text-[10px] uppercase text-signal">In progress</span></div>
                <div className="md:col-span-6"><h3 className="font-display text-2xl font-bold">{d.featuredProjects[2].name}</h3><p className="mt-2 text-sm text-projects-muted">{d.featuredProjects[2].subtitle}. No topic or technology has been claimed yet.</p></div>
                <div className="md:col-span-3 md:text-right"><ProjectDialog project={d.featuredProjects[2]}><Button variant="outline" className="rounded-none border-projects-rule bg-transparent text-projects-foreground hover:bg-projects-foreground hover:text-projects">View placeholder</Button></ProjectDialog></div>
              </article>
            </div>
            <div className="mt-16 border-t border-projects-rule pt-8">
              <p className="detail-label text-projects-muted">Web experiments & personal projects</p>
              <div className="mt-5 grid gap-px bg-projects-rule md:grid-cols-3">
               {d.webExperiments.map((item) => (
  <article className="bg-projects p-5" key={item.name}>
    {item.images?.[0] && (
      <div className="mb-5 flex h-64 items-center justify-center overflow-hidden border border-border bg-background">
        <img
          src={item.images[0]}
          alt={`${item.name} screenshot`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    )}

    <div className="flex items-center gap-2">
      <Code2 className="size-5 text-signal" />
      <h3 className="font-display text-xl font-bold">
        {item.name}
      </h3>
    </div>

    <p className="mt-2 text-sm text-projects-muted">
      {item.type} · {item.tech}
    </p>

    {item.images?.length > 1 && (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {item.images.slice(1).map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${item.name} screenshot ${index + 2}`}
            className="h-32 w-full object-contain border border-border bg-background"
          />
        ))}
      </div>
    )}
  </article>
))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="05">Technical skills</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <h2 className="section-title">An honest view of my current toolkit.</h2>
              <div className="mt-10 divide-y divide-border border-y border-border">
                {d.skills.map((skill, index) => (
                  <div className="grid gap-4 py-6 sm:grid-cols-3" key={skill.level}>
                    <div className="flex items-start gap-3"><span className="font-mono text-[10px] text-signal">0{index + 1}</span><h3 className="font-display font-semibold">{skill.level}</h3></div>
                    <div className="flex flex-wrap gap-2 sm:col-span-2">{skill.groups.map((group) => <span className="tag tag-outline" key={group}>{group}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="06">Experience</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <h2 className="section-title">Internships & applied learning.</h2>
              <div className="mt-10 divide-y divide-border border-y border-border">
                {d.experience.map((item) => (
                  <article className="grid gap-4 py-7 md:grid-cols-[1fr_2fr]" key={item.organization}>
                    <div><p className="font-mono text-[11px] uppercase text-signal">{item.period}</p><p className="mt-2 text-sm text-muted-foreground">{item.location}</p></div>
                    <div><h3 className="font-display text-2xl font-semibold">{item.role}</h3><p className="mt-1 font-medium">{item.organization}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.detail}</p>{item.certificateFile ? (
  <a
    href={item.certificateFile}
    target="_blank"
    rel="noreferrer"
    className="mt-4 inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-muted"
  >
    <FileText aria-hidden="true" className="size-4 text-signal" />
    View certificate
    <ExternalLink aria-hidden="true" className="size-3" />
  </a>
) : (
  <p className="mt-4 inline-flex items-center gap-2 border border-dashed border-border px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground">
    <FileText aria-hidden="true" className="size-4 text-signal" />
    {item.certificate}
  </p>

                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="07">Education</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <div className="grid gap-px bg-border lg:grid-cols-3">
                {d.education.map((item, index) => (
                  <article className={`bg-background p-6 md:p-8 ${index === 0 ? "lg:col-span-2" : ""}`} key={`${item.qualification}-${item.result}`}>
                    <GraduationCap className="size-5 text-signal" />
                    <p className="mt-10 font-mono text-[10px] uppercase text-muted-foreground">{item.period || "Academic record"}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{item.qualification}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.institution}{item.board ? ` · ${item.board}` : ""}</p>
                    <p className={`mt-7 font-display font-bold text-signal ${index === 0 ? "text-4xl" : "text-2xl"}`}>{item.result}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="08">Professional development</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {d.development.map((item, index) => <div className="flex min-h-28 items-start gap-4 bg-background p-5" key={item}><span className="font-mono text-[10px] text-signal">{String(index + 1).padStart(2, "0")}</span><p className="font-display text-lg font-semibold">{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="design" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="09">Design perspective</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <div className="grid gap-10 lg:grid-cols-2">
                <div><h2 className="section-title">UI/UX & creative work.</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{d.design.summary}</p><div className="mt-7 flex flex-wrap gap-2">{d.design.categories.map((item) => <span className="tag tag-outline" key={item}>{item}</span>)}</div><div className="mt-8 flex flex-wrap gap-4"><span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><ExternalLink className="size-4 text-signal" /> Canva profile placeholder</span><a className="social-link" href={d.links.instagram} target="_blank" rel="noreferrer"><Instagram /> @canvaco_</a></div></div>
               <div className="grid grid-cols-2 gap-3">
  {d.design.images.map((image, index) => (
    <div
      key={image}
      className={`overflow-hidden border border-border bg-background ${
        index === 0 ? "col-span-2" : ""
      }`}
    >
      <img
        src={image}
        alt={`Creative design ${index + 1}`}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  ))}
</div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section-shell scroll-mt-24 border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="10">Certifications</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {d.certifications.map((cert) => (
                  <article className="bg-background p-6 md:p-8" key={cert.name}>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <Award aria-hidden="true" className="size-6 shrink-0 text-signal" />
                      <span className="tag tag-outline shrink-0">{cert.category}</span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold">{cert.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{cert.issuer} · {cert.date}</p>
                   {cert.file ? (
  <a
    href={cert.file}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-muted"
  >
    <FileText aria-hidden="true" className="size-4 text-signal" />
    View certificate
    <ExternalLink aria-hidden="true" className="size-3" />
  </a>
) : (
  <p className="mt-6 inline-flex items-center gap-2 border border-dashed border-border px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground">
    <FileText aria-hidden="true" className="size-4 text-signal" />
    {cert.status}
  </p>
)}
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="section-shell border-b border-border py-16 lg:py-20">
          <div className="editorial-grid">
            <SectionLabel number="11">Leadership & beyond</SectionLabel>
            <div className="col-span-12 grid gap-10 md:col-span-9 lg:grid-cols-2">
              <div><h2 className="font-display text-2xl font-bold">Volunteering</h2><ul className="mt-6 divide-y divide-border border-y border-border">{d.volunteering.map((item) => <li className="flex items-center gap-3 py-4 text-sm" key={item}><BriefcaseBusiness className="size-4 text-signal" />{item}</li>)}</ul></div>
              <div><h2 className="font-display text-2xl font-bold">Beyond technology</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">A few interests outside my primary technology path.</p><div className="mt-6 flex flex-wrap gap-2">{d.interests.map((item) => <span className="tag tag-outline" key={item}>{item}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section className="section-shell border-b border-border py-16 lg:py-20">
          <div className="grid grid-cols-12 items-center gap-8 bg-foreground p-7 text-background md:p-10">
            <div className="col-span-12 md:col-span-8"><p className="font-mono text-[10px] uppercase text-signal">Resume</p><h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">A concise overview of my education, technical skills, projects and experience.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-background/70"></p></div>
            <div className="col-span-12 flex flex-wrap gap-3 md:col-span-4 md:justify-end"><ResumeDialog><Button className="rounded-none bg-background text-foreground hover:bg-signal hover:text-signal-foreground">View resume <FileText /></Button></ResumeDialog><ResumeDialog><Button variant="outline" className="rounded-none border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground">Download <ArrowDownToLine /></Button></ResumeDialog></div>
          </div>
        </section>

        <section id="contact" className="section-shell scroll-mt-24 py-16 lg:py-24">
          <div className="editorial-grid">
            <SectionLabel number="12">Contact</SectionLabel>
            <div className="col-span-12 md:col-span-9">
              <h2 className="section-title max-w-3xl">Let’s build something practical.</h2>
              <div className="mt-10 grid gap-12 lg:grid-cols-2">
                <div>
                  <div className="space-y-3 border-t border-foreground pt-5">
                    <a className="contact-row" href={`mailto:${d.identity.email}`}><Mail /> <span>{d.identity.email}</span></a>
                    <a className="contact-row" href={`tel:+91${d.identity.phone}`}><Phone /> <span>+91 {d.identity.phone}</span></a>
                    <p className="text-sm leading-6 text-muted-foreground">{d.identity.location}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild className="rounded-none px-5"><a href={`mailto:${d.identity.email}`}>Email me <Mail /></a></Button>
                    <Button variant="outline" className="rounded-none px-5" onClick={copyEmail}>
                      {copied ? "Email copied" : "Copy email"} {copied ? <Check /> : <Copy />}
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a aria-label="GitHub" className="icon-link" href={d.links.github} target="_blank" rel="noreferrer"><Github /></a>
                    <a aria-label="LinkedIn" className="icon-link" href={d.links.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
                    <a aria-label="YouTube" className="icon-link" href={d.links.youtube} target="_blank" rel="noreferrer"><Youtube /></a>
                    <a aria-label="Design Instagram" className="icon-link" href={d.links.instagram} target="_blank" rel="noreferrer"><Instagram /></a>
                  </div>
                </div>
                <form className="space-y-4" onSubmit={submitContact}>
                  <div><label className="form-label" htmlFor="name">Name</label><Input id="name" name="name" required className="mt-2 h-11 rounded-none" /></div>
                  <div><label className="form-label" htmlFor="email">Email</label><Input id="email" name="email" type="email" required className="mt-2 h-11 rounded-none" /></div>
                  <div><label className="form-label" htmlFor="message">Message</label><Textarea id="message" name="message" required rows={5} className="mt-2 rounded-none" /></div>
                  <Button type="submit" className="rounded-none px-6">Prepare email <ArrowUpRight /></Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="section-shell flex flex-col gap-3 py-7 font-mono text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Sahala Shana VK</span><span>B.Tech IT · Graduating 2027</span>
        </div>
      </footer>
    </div>
  );
}
