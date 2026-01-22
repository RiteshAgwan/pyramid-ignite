import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Mail } from 'lucide-react';

// Team member images
import jeevanImg from '@/assets/team/jeevan.png';
import sudheerImg from '@/assets/team/sudheer.png';
import sumanImg from '@/assets/team/suman.png';
import ekthaImg from '@/assets/team/ektha.png';
import harikaImg from '@/assets/team/harika.png';
import drVeeranaImg from '@/assets/team/dr-veerana.png';
import rajkumarImg from '@/assets/team/rajkumar.png';

const teamMembers = [
  {
    name: 'Jeevan',
    role: 'CEO & Founder',
    bio: 'Leading our vision to transform engineering education with strategic leadership and industry expertise.',
    image: jeevanImg,
  },
  {
    name: 'Sudheer',
    role: 'Executive Director',
    bio: 'Driving organizational growth and strategic partnerships with a focus on excellence.',
    image: sudheerImg,
  },
  {
    name: 'Suman',
    role: 'Chief Operations Officer',
    bio: 'Managing operational workflows and coordinating training programs for seamless execution.',
    image: sumanImg,
  },
  {
    name: 'Ektha',
    role: 'HR Manager',
    bio: 'Overseeing talent acquisition and ensuring a positive work culture across all teams.',
    image: ekthaImg,
  },
  {
    name: 'Harika',
    role: 'Operations',
    bio: 'Ensuring smooth operations and excellent coordination between institutions and training teams.',
    image: harikaImg,
  },
  {
    name: 'Dr. Veerana',
    role: 'Head of Training',
    bio: 'Leading our technical training initiatives with deep expertise in modern technologies and development practices.',
    image: drVeeranaImg,
  },
  {
    name: 'Raj Kumar',
    role: 'L&D – Digital Operations Lead',
    bio: 'Leading digital operations and learning & development initiatives with innovative solutions.',
    image: rajkumarImg,
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
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meet Our Experts</span>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                  Our <span className="gradient-text">Team</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our team of passionate educators and industry professionals are dedicated to 
                  transforming students into industry-ready professionals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Section - Unified */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full w-[280px]">
                    {/* Profile Image */}
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform shadow-lg border-2 border-primary/20">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground font-medium text-sm mb-4">{member.role}</p>
                      <p className="text-muted-foreground/80 text-sm leading-relaxed">
                        {member.bio}
                      </p>
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
