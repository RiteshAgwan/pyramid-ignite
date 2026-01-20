import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vijaya Mair',
    title: 'President, Telangana TPO Consortium',
    quote: 'Pyramid Consulting has been instrumental in transforming our placement outcomes. Their hands-on training approach and industry-relevant curriculum have significantly improved our students\' employability.',
    highlights: ['Hands-on Training', 'Industry Curriculum'],
  },
  {
    name: 'Amit Yadav',
    title: 'DGM Training & Placement, NIET',
    quote: 'The team at Pyramid brings exceptional professionalism and dedication. Their company-specific training modules have helped our students crack interviews at top MNCs consistently.',
    highlights: ['Professional Delivery', 'High Placement Ratios'],
  },
  {
    name: 'Dr. V Saravanan',
    title: 'Training & Placement Officer',
    quote: 'What sets Pyramid apart is their commitment to student success. The personalized attention and real-world exposure they provide are unmatched in the industry.',
    highlights: ['Real-World Exposure', 'Student Success'],
  },
  {
    name: 'Dr. A Alavudeen',
    title: 'Academic Director',
    quote: 'Our collaboration with Pyramid Consulting has resulted in a remarkable improvement in placement statistics. Their innovative training methodologies are truly commendable.',
    highlights: ['Innovative Methods', 'Improved Statistics'],
  },
  {
    name: 'Dr. M Vijay Karthik',
    title: 'Placement Coordinator',
    quote: 'Pyramid\'s comprehensive approach covering technical skills, aptitude, and soft skills has made a significant difference in our students\' confidence and performance.',
    highlights: ['Comprehensive Approach', 'Skill Development'],
  },
  {
    name: 'Prof. R Mageshwaran',
    title: 'Head of Department',
    quote: 'The dedication and expertise of Pyramid\'s trainers have transformed our students into industry-ready professionals. Highly recommended for any institution serious about placements.',
    highlights: ['Expert Trainers', 'Industry-Ready Students'],
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 navy-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2">
              What Our Partners Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/20">
              <Quote className="w-12 h-12 text-accent mb-6" />
              
              <p className="text-xl md:text-2xl text-primary-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {testimonials[currentIndex].highlights.map((highlight) => (
                  <span 
                    key={highlight}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
                  >
                    ✓ {highlight}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display text-xl font-bold text-primary-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-foreground/70">
                    {testimonials[currentIndex].title}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={goToPrev}
                    className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary-foreground" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
