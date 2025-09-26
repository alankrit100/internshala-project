import Container from "./Container";


export default function Footer() {
      return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-indigo-600"></div>
              <span className="font-semibold">FluentIELTS</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Mon–Sat, 9am–7pm IST. Online and in-person batches.
            </p>
          </div>
          <div>
            <p className="font-semibold">Links</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-indigo-600">Courses</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-600">Results</a></li>
              <li><a href="#hero" className="hover:text-indigo-600">Book Demo</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>+91-90000-00000</li>
              <li>hello@fluentielts.com</li>
              <li>MG Road, Bengaluru</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Social</p>
            <div className="mt-3 flex items-center gap-3 text-gray-600">
              <a href="#" className="hover:text-indigo-600">LinkedIn</a>
              <a href="#" className="hover:text-indigo-600">Instagram</a>
              <a href="#" className="hover:text-indigo-600">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} FluentIELTS. All rights reserved.
        </div>
      </Container>
    </footer>
  );

}