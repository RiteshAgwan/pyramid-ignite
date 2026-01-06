import { ScrollReveal } from '@/components/ui/ScrollReveal';

const institutions = [
  'CMR Engineering College',
  'CVR College of Engineering',
  'NIET',
  'KSR Institutions',
  'Kalasalingam University',
  'Sridevi College',
  'Scient Institute of Technology',
  "St. Joseph Engineering College",
  'Kakatiya Institute of Technology & Science',
  'JNTU Hyderabad',
  'Osmania University',
  'VNR VJIET',
];

export function InstitutionLogos() {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Trusted by Top Engineering Institutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We collaborate with leading engineering colleges across India to deliver world-class training programs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {institutions.map((institution, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="bg-card rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 group">
                <div className="w-14 h-14 mx-auto mb-3 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="font-display font-bold text-xl gradient-text">
                    {institution.split(' ').map(w => w[0]).join('').slice(0, 3)}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">{institution}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
