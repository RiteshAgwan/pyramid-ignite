import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Server, Building2 } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Product Based Trainings',
    description: 'Industry-aligned programs designed for product company hiring standards. Master DSA, System Design, and coding interviews.',
    color: 'from-primary to-accent',
  },
  {
    icon: Server,
    title: 'Service Based Trainings',
    description: 'Focused preparation for service company technical & HR rounds. Build strong fundamentals and communication skills.',
    color: 'from-accent to-primary',
  },
  {
    icon: Building2,
    title: 'Company Specific Trainings',
    description: 'Customized hiring-pattern driven training with mock tests, coding rounds, interviews, and placement simulations.',
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
              Tailored programs designed to prepare students for every type of IT placement opportunity
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden border border-border/50">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
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
