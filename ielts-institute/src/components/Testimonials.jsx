import Container from "./Container";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

const reviews = [
      { name: 'Arjun M.', score: '7.5', quote: 'Mock tests were spot-on. The analytics showed exactly where to improve.' },
  { name: 'Sara K.', score: '8.0', quote: 'Speaking mentors boosted my confidence in two weeks.' },
  { name: 'Li Wei', score: '7.0', quote: 'AI band score helped me fine-tune essays quickly.' },

];


export default function Testimonials(){
      return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          eyebrow="Student stories"
          title="Proven results across modules"
          sub="Hear from learners who achieved their target bands."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </div>
      </Container>
    </section>
  );
}


