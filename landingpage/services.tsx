export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-[#F5F5F5]">Our Services</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Anxiety & Panic Therapy",
              text: "Support for constant worry, overthinking, physical tension, and panic symptoms using CBT, mindfulness, and body-based approaches.",
            },
            {
              title: "Trauma & EMDR Therapy",
              text: "Trauma-informed care for single-incident or complex trauma, paced carefully to support safety, regulation, and healing.",
            },
            {
              title: "Burnout & Perfectionism",
              text: "For professionals and high-achievers feeling exhausted or disconnected after years of pushing through stress.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-neutral-50 p-8 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-medium text-[#2F2F2F]">
                {service.title}
              </h3>
              <p className="mt-4 text-neutral-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
