export default function FAQ() {
  const faqs = [
    {
      q: "Do you offer telehealth sessions?",
      a: "Yes. I provide secure online therapy for clients located anywhere in California.",
    },
    {
      q: "What issues do you specialize in?",
      a: "I work primarily with anxiety, trauma, burnout, perfectionism, and chronic stress in adults.",
    },
    {
      q: "What is EMDR therapy?",
      a: "EMDR is an evidence-based approach that helps process traumatic experiences in a safe and structured way.",
    },
    {
      q: "How do I know if therapy with you is a good fit?",
      a: "Finding the right therapist matters. I offer an initial consultation so we can talk about what you’re looking for, how I work, and whether my approach feels supportive and aligned with your needs.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-[#2F2F2F]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-medium text-[#2F2F2F]">{faq.q}</h3>
              <p className="mt-3 text-neutral-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
