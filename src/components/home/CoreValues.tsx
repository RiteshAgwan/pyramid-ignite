import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { 
  Award, 
  Shield, 
  Heart, 
  Users, 
  Lightbulb, 
  TrendingUp 
} from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Quality & Excellence',
    description: 'We are committed to delivering the highest quality training programs that exceed industry standards.',
  },
  {
    icon: Shield,
    title: 'Integrity & Commitment',
    description: 'We uphold the highest ethical standards and stay true to our promises to students and partners.',
  },
  {
    icon: Heart,
    title: 'Passion & Professionalism',
    description: 'Our trainers bring genuine passion and professionalism to every session they conduct.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Approach',
    description: 'We prioritize the needs and success of our students and institutional partners above all.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation in Training',
    description: 'We continuously evolve our methods to incorporate the latest industry trends and technologies.',
  },
  {
    icon: TrendingUp,
    title: 'Mutual Growth',
    description: 'We believe in growing together with our partners, creating lasting relationships built on trust.',
  },
];

export function CoreValues() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
              Core Values That Drive Us
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              The principles that guide every training session and partnership we build
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/30">
                <div className="w-20 h-20 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
