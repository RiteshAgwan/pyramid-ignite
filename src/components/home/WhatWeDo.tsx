import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Cpu, Settings2 } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'CRT – Campus Recruitment Training',
    description: 'Campus Recruitment Training (CRT) focuses on developing core employability skills required to succeed in campus placement drives.',
    items: [
      'Aptitude (Quantitative, Logical, Verbal)',
      'Soft Skills & Communication',
      'Resume Building',
      'Group Discussions',
      'HR & Behavioral Interview Preparation',
      'Mock Tests & Placement Simulations',
      'Time & Stress Management',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: Cpu,
    title: 'Emerging Technologies',
    description: 'Advanced training programs in high-demand technologies aligned with current and future industry needs.',
    items: [
      'Artificial Intelligence (AI)',
      'Machine Learning (ML)',
      'Data Science',
      'Cloud Computing',
      'DevOps',
      'Cyber Security',
    ],
    color: 'from-accent to-primary',
  },
  {
    icon: Settings2,
    title: 'Customized Training Programs',
    description: 'Tailor-made training solutions designed as per institutional, corporate, or company-specific requirements.',
    items: [
      'Custom curriculum design',
      'Flexible duration & delivery modes',
      'Company-specific hiring pattern focus',
      'Practical & hands-on sessions',
      'Pre-placement intensive training',
    ],
    color: 'from-primary to-accent',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
              Comprehensive Training Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              End-to-end training programs designed to enhance employability and placement success
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden border border-border/50 h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all mt-auto"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link to="/services">
              <Button variant="gradient" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
