import { useState } from "react";
import Container from "./Container";

const nav = [
    { name: "Courses", href: "#features" }, 
    { name: "Results", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
            <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <Container className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-indigo-600"></div>
          <span className="font-semibold">FluentIELTS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-gray-700 hover:text-indigo-600">
              {item.name}
            </a>
          ))}
          <a href="#hero" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
            Book Free Demo
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center p-2 rounded hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
        </button>
              </Container>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <Container className="py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-indigo-600">
                {item.name}
              </a>
            ))}
            <a href="#hero" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
              Book Free Demo
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}


