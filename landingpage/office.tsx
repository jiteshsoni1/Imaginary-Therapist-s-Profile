import Image from "next/image";

export default function Office() {
  return (
    <section id="office" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-[#82864B]">
          A Calm Space in Santa Monica
        </h2>

        <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
          My office is designed to feel quiet, grounding, and private—helping
          you feel at ease from the moment you arrive.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-1">
          {["therapy-room.jpg", "waiting-area.jpg"].map((img) => (
            <div key={img} className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src={`/images/${img}`}
                alt="Therapy office space"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          123th Street 45 W, Santa Monica, CA 90401 · In-person & California
          telehealth available
        </p>
      </div>
    </section>
  );
}
