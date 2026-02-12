import Link from "next/link"; // Import Link if using Next.js

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from--200 via-100 to-pink-200 text-slate-800"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-purple-900">
          Ready to Start?
        </h2>
        <p className="text-xl text-800/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your first consultation is free. Let's talk about what’s been weighing
          on you.
        </p>

        {/* Single Link component with all the styling applied to it directly */}
        <Link
          href="/consultation"
          className="inline-flex items-center px-12 py-6 bg--600 text-white font-bold text-xl rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          Book Free Consultation
          <svg
            className="w-6 h-6 ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
