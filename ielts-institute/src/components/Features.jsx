import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

const items = [
  { title: 'Speaking Practice', desc: 'Daily 1:1 speaking sessions with CEFR-aligned feedback.' },
  { title: 'Mock Tests', desc: 'Weekly timed mocks with analytics across all modules.' },
  { title: 'AI Band Score', desc: 'Instant writing and speaking band estimates powered by AI.' },
  { title: 'Personal Mentor', desc: 'Guidance, plans, and doubt clearing tailored to goals.' },
]

export default function Features() {
    return (
            <section id="features" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Everything needed to score higher"
          sub="Tools and coaching designed around the official IELTS criteria."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
