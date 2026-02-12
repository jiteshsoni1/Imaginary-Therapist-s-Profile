export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <span className="text-lg font-medium tracking-wide">
          <a href="/" className="hover:opacity-70">
            GROW MY THERAPY{" "}
          </a>
        </span>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#services" className="hover:opacity-70">
            Services
          </a>
          <a href="#office" className="hover:opacity-70">
            Office
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
          <a
            href="/"
            className="rounded-full border border-neutral-900 px-4 py-2 text-sm hover:bg-neutral-900 hover:text-white transition"
          >
            Client Portal
          </a>
        </nav>
      </div>
    </header>
  );
}
