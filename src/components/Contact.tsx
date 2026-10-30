import type { ReactNode } from 'react';

import { addressOneLine, phoneHref, projects, site } from '../config/site';
import Icon, { type IconName } from './Icon';

const collage = projects.slice(0, 8).map((project) => project.image.src);

function Detail({ icon, label, wide = false, children }: { icon: IconName; label: string; wide?: boolean; children: ReactNode }) {
  return (
    <div className={`flex min-w-0 gap-3 ${wide ? 'sm:col-span-2' : ''}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-deep/25 text-violet">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
        <dd className="mt-0.5 break-words">{children}</dd>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" tabIndex={-1} className="outline-none">
      {/* Big call to action over a tilted wall of project screenshots */}
      <div className="relative isolate overflow-hidden border-y border-line py-24 sm:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-20 grid -rotate-[10deg] scale-125 grid-cols-2 gap-5 opacity-50 sm:grid-cols-4">
          {[...collage, ...collage].map((src, index) => (
            <img key={index} src={src} alt="" width={800} height={500} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded-xl object-cover" />
          ))}
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(9_9_11/0.75),rgb(46_16_101/0.75)_60%,rgb(9_9_11/0.9))]" />

        <div className="container-page">
          <div className="reveal mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/45 px-6 py-12 text-center backdrop-blur-md sm:px-12">
            <h2 id="contact-title" className="text-3xl sm:text-4xl">
              Let's Build Something Great <span className="text-accent">Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] text-[#d4d4d8]">
              Available for full-time remote projects, with 40+ hours per week and flexibility to accommodate deadlines
              and different time zones. Open to discussing your project, budget, and long-term goals. Whether you need a
              new product built, an existing platform improved, or a reliable developer to bring your ideas to life, let's
              connect and make it happen.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a className="btn btn-light" href={`mailto:${site.email}`}>
                <Icon name="mail" className="h-4 w-4" />
                Email Me
              </a>
              <a className="btn btn-dark bg-black/30" href={`tel:${phoneHref}`}>
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business details, in full */}
      <div className="container-page pt-16">
        <div className="reveal card grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl">
              Let's Work <span className="text-accent">Together</span>
            </h3>
            <p className="mt-3 text-muted">
              Open to freelance projects, contract opportunities, and full-time roles with teams looking for a reliable,
              experienced development partner. Work directly with me from the initial conversation through planning,
              development, and delivery. I value clear communication, thoughtful collaboration, and building high-quality
              solutions that create lasting value. Whether you have an idea to bring to life, an existing product to
              improve, or a long-term project in mind, I'd be happy to connect and explore how we can work together.
            </p>
            <p className="mt-4 font-semibold">{site.name}</p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              Available now
            </p>
          </div>

          <address className="not-italic">
            <dl className="grid gap-6 sm:grid-cols-2">
              <Detail icon="mail" label="Email" wide>
                <a className="link break-all" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </Detail>
              {/* Full width so the URL fits on one line instead of breaking mid-word. */}
              <Detail icon="github" label="GitHub" wide>
                <a className="link" href={site.links.github} target="_blank" rel="noopener noreferrer">
                  {site.links.github.replace('https://', '')}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Detail>
              <Detail icon="phone" label="Phone">
                <a className="link" href={`tel:${phoneHref}`}>
                  {site.phone}
                </a>
              </Detail>
              <Detail icon="pin" label="Address">
                {addressOneLine}
              </Detail>
            </dl>
          </address>
        </div>
      </div>
    </section>
  );
}
