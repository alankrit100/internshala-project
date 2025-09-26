export default function TestimonialCard({ quote, name, score, avatar }) {
    return (
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
          {avatar ? <img src={avatar} alt={`${name} avatar`} className="h-full w-full object-cover" /> : null}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">Band {score}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700">“{quote}”</p>
    </div>
  );
}
