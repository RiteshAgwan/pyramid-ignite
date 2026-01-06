import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in IT training and corporate recruitment, Rajesh leads our vision to transform engineering education.',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Training',
    bio: 'Priya brings deep expertise in curriculum development and has trained over 10,000 students in her career.',
    initials: 'PS',
  },
  {
    name: 'Amit Verma',
    role: 'Head of Placements',
    bio: 'Amit manages our extensive network of hiring partners and has facilitated placements at 100+ companies.',
    initials: 'AV',
  },
  {
    name: 'Dr. Sneha Reddy',
    role: 'Academic Director',
    bio: 'Dr. Sneha ensures our programs align with academic standards while meeting industry requirements.',
    initials: 'SR',
  },
  {
    name: 'Vikram Singh',
    role: 'Technical Lead',
    bio: 'Vikram oversees our technical training programs with expertise in full-stack development and cloud technologies.',
    initials: 'VS',
  },
  {
    name: 'Kavitha Nair',
    role: 'HR & Soft Skills Trainer',
    bio: 'Kavitha specializes in interview preparation, communication skills, and corporate etiquette training.',
    initials: 'KN',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Team</span>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                  Meet the <span className="gradient-text">Experts</span> Behind Your Success
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our team of passionate educators and industry professionals are dedicated to 
                  transforming students into industry-ready professionals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-24 h-24 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="font-display text-3xl font-bold text-primary-foreground">
                        {member.initials}
                      </span>
                    </div>

                    <div className="text-center">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      <div className="flex justify-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="bg-card rounded-3xl p-12 text-center shadow-xl border border-border/50 max-w-3xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Join Our Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're always looking for passionate educators and industry professionals to join our mission.
                </p>
                <a href="mailto:careers@pyramidconsulting.in" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                  Send us your resume
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
