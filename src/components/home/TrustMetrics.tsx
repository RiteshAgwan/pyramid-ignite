import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { 
  Trophy, 
  Users, 
  Target, 
  GraduationCap, 
  Building2, 
  Globe 
} from 'lucide-react';

const stats = [
  { icon: Trophy, value: 5.5, suffix: '+', label: 'Years of Excellence', prefix: '' },
  { icon: GraduationCap, value: 25000, suffix: '+', label: 'Successful Placements', prefix: '' },
  { icon: Target, value: 92, suffix: '%', label: 'Placement Success Rate', prefix: '' },
  { icon: Users, value: 100, suffix: '+', label: 'Industry Trainers', prefix: '' },
  { icon: Building2, value: 50, suffix: '+', label: 'Hiring Partners', prefix: '' },
  { icon: Globe, value: 0, suffix: '', label: 'Pan-India Presence', prefix: '', special: true },
];

export function TrustMetrics() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Trusted by Thousands
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto mb-4 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  {stat.special ? (
                    <span>🌍</span>
                  ) : (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix}
                    />
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
