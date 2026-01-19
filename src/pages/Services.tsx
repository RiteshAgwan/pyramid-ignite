import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Laptop, 
  Server, 
  Building2, 
  Code, 
  Cloud, 
  Database,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

const mainServices = [
  {
    icon: Laptop,
    title: 'Product Based Trainings',
    description: 'Comprehensive preparation for product company interviews including DSA, System Design, and problem-solving.',
    features: [
      'Data Structures & Algorithms',
      'System Design Fundamentals',
      'Competitive Programming',
      'Mock Technical Interviews',
      'Company-specific Preparation',
    ],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Service Based Trainings',
    description: 'Focused preparation for service company technical and HR rounds with emphasis on fundamentals.',
    features: [
      'Core Programming Concepts',
      'Aptitude & Reasoning',
      'Communication Skills',
      'Group Discussion Practice',
      'HR Interview Preparation',
    ],
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Building2,
    title: 'Company Specific Trainings',
    description: 'Customized training programs designed around specific company hiring patterns and requirements.',
    features: [
      'Company Pattern Analysis',
      'Custom Mock Tests',
      'Previous Year Questions',
      'Placement Simulations',
      'Direct Hiring Coordination',
    ],
    color: 'from-orange-600 to-red-500',
  },
];

const techPrograms = [
  { icon: Code, title: 'Full Stack Development', duration: '16-20 weeks' },
  { icon: Database, title: 'Data Structures & Algorithms', duration: '12-16 weeks' },
  { icon: Cloud, title: 'Cloud & DevOps', duration: '10-14 weeks' },
  { icon: Laptop, title: 'Web Development', duration: '10-12 weeks' },
];

const mbaPrograms = [
  { title: 'MBA – Finance', description: 'Financial management, corporate finance, investments' },
  { title: 'MBA – Marketing', description: 'Digital marketing, branding, sales strategy' },
  { title: 'MBA – HR', description: 'Recruitment, HR operations, employee management' },
  { title: 'MBA – Operations', description: 'Supply chain, project & process management' },
  { title: 'MBA – Business Analytics', description: 'Data-driven decision making, basic analytics' },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                  Comprehensive <span className="gradient-text">Training Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  From product-based to service-based companies, we prepare students for every 
                  type of IT placement opportunity with industry-aligned training programs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {mainServices.map((service, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className={`h-64 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-24 h-24 text-primary-foreground/90" />
                      </div>
                    </div>
                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button variant="gradient">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Programs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Technical Programs</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Specialized Training Tracks
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techPrograms.map((program, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all group text-center">
                    <div className="w-16 h-16 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <program.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.duration}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* MBA Programs */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Professional Development</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
                  MBA Training Programs
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {mbaPrograms.map((program, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="bg-background rounded-xl p-5 shadow-md border border-border/50 hover:shadow-lg transition-all group h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-sm leading-tight">{program.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{program.description}</p>
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
                Need a Custom Training Solution?
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                We design tailored programs to meet your institution's specific requirements and goals.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                  Request Custom Program
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

export default Services;
