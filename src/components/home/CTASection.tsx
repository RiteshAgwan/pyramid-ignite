import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your <span className="gradient-text">Placement Outcomes?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Partner with us to deliver industry-leading IT training programs and achieve exceptional placement success for your students.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get in Touch Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919553419349">
                <Button variant="outline" size="xl">
                  <Phone className="w-5 h-5" />
                  +91 95534 19349
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
