import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-5xl grid gap-19 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-4xl font-semibold text-[#F5F2EDF]">
            Meet Dr. Maya Reynolds, PsyD
          </h2>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            I’m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults navigating anxiety, trauma,
            burnout, and high internal pressure.
          </p>

          <p className="mt-7 text-neutral-600 leading-relaxed">
            My approach is warm, collaborative, and grounded, integrating
            evidence-based methods such as CBT, EMDR, mindfulness, and
            body-oriented techniques.
          </p>
        </div>

        <div className="relative h-120 w-150 overflow-hidden rounded-xl">
          <Image
            src="/images/maya-headshot.png"
            alt="Dr. Maya Reynolds, PsyD"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
