export default function SectionHeading({ eyebrow, title, sub }) {
    return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <p className="text-sm font-semibold text-primary-600">{eyebrow}</p>}
      <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-gray-600">{sub}</p>}
    </div>
    );
}