import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, History } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                  Empowering Future <span className="gradient-text">Tech Leaders</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Pyramid Consultancy and IT Learning is a leading IT training and placement company 
                  dedicated to bridging the gap between academic learning and industry requirements.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <History className="w-8 h-8 text-accent" />
                    <span className="text-accent font-semibold uppercase tracking-wider">Our Story</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    5.5+ Years of Transforming Careers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded with a vision to revolutionize IT education in India, Pyramid Consultancy and IT Learning has 
                    grown from a small training initiative to a pan-India presence serving over 25,000+ 
                    students across 50+ engineering institutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our journey began with a simple belief: every engineering student deserves access to 
                    quality training that prepares them for real-world challenges. Today, we are proud 
                    to be trusted partners of top engineering colleges across India.
                  </p>
                  <Link to="/contact">
                    <Button variant="gradient" size="lg">
                      Partner With Us
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '5.5+', label: 'Years of Excellence' },
                    { value: '25K+', label: 'Students Placed' },
                    { value: '92%', label: 'Placement Rate' },
                    { value: '100+', label: 'Expert Trainers' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-background rounded-2xl p-6 text-center shadow-lg">
                      <div className="font-display text-4xl font-bold gradient-text">{stat.value}</div>
                      <p className="text-muted-foreground mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  What Sets Us Apart
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Industry-Aligned Curriculum',
                  description: 'Our courses are designed in collaboration with industry experts to ensure relevance and practical applicability.',
                },
                {
                  icon: Users,
                  title: 'Expert Trainers',
                  description: 'Learn from professionals with real-world experience in top tech companies and startups.',
                },
                {
                  icon: Award,
                  title: 'Proven Track Record',
                  description: '92% placement success rate with students placed in leading product and service companies.',
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 h-full">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 navy-section">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Institution's Placement Outcomes?
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                Join 50+ institutions that trust Pyramid Consultancy and IT Learning for their IT training needs.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
