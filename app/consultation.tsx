import { useState } from "react";

export default function ConsultationForm() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="mx-auto max-w-2xl px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-purple-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-purple-900 mb-2">
              Book Your Free Consultation
            </h2>
            <p className="text-slate-600">
              Fill out the details below and I'll get back to you within 24
              hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-purple-900 mb-2">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-purple-900 mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                What are you looking for? *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none appearance-none bg-white"
              >
                <option value="">Select a service</option>
                <option value="individual">Individual Therapy</option>
                <option value="couples">Couples Counseling</option>
                <option value="anxiety">Anxiety Management</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                Briefly, what’s been weighing on you? *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me a little bit about what you'd like to discuss..."
                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transform transition-active active:scale-[0.98] shadow-lg shadow-purple-200"
            >
              Request My Free Session
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
