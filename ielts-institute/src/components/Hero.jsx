import Container from "./Container";

export default function Hero() {
      return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white"></div>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Crack IELTS with confidence
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Personalized training, AI band predictions, and daily speaking practice to boost scores fast.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#features" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
                View Courses
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50">
                Book Free Demo
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">Average improvement +1.5 band in 6 weeks.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gray-100 shadow-sm ring-1 ring-black/5">
              {/* Replace with real image */}
              <div className="h-full w-full grid place-items-center text-gray-400">Hero Banner</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    );
}