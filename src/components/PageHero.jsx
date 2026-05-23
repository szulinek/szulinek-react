export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-12 sm:pt-16" aria-labelledby="page-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent">{eyebrow}</p>
          <h1 id="page-title" className="mt-3 text-4xl font-bold leading-tight text-text-main sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-text-muted">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
