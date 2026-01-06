import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Eye, Target } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <ScrollReveal delay={0}>
            <div className="bg-card rounded-3xl p-10 shadow-lg border border-border/50 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 gradient-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Vision
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  To build a <strong className="text-foreground">globally recognized legacy</strong> of exceptional IT training, driven by integrity, passion, innovation, and adaptability. We envision a future where every engineering student has access to world-class training and placement opportunities.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Integrity', 'Passion', 'Innovation', 'Adaptability'].map((value) => (
                    <span 
                      key={value}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={150}>
            <div className="bg-card rounded-3xl p-10 shadow-lg border border-border/50 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent-foreground" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  To passionately enable students and institutions through <strong className="text-foreground">professional training</strong>, high-quality delivery, and mutual growth. We are committed to bridging the gap between academic learning and industry requirements.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Excellence', 'Empowerment', 'Growth', 'Impact'].map((value) => (
                    <span 
                      key={value}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
