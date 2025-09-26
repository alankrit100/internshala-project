export default function FeatureCard({ icon, title, desc }) {
    return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded bg-primary-50 text-primary-600 grid place-items-center mb-4">
        {icon ?? <span className="text-sm">★</span>}
      </div>
      <h3 className="font-display font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
