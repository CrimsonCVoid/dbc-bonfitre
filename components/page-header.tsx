import Image from "next/image";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image = "/images/home-banner-2208w.jpg",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-ink-900/60" aria-hidden="true" />
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-32 text-center text-white">
        <p className="eyebrow text-[var(--color-ember-400)]">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-balance text-base text-sand-100/90 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
