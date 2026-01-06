import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart3, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Web Development',
    duration: '12 Weeks',
    modules: '15 Modules',
    level: 'Beginner to Intermediate',
    color: 'from-blue-500 to-cyan-500',
    icon: '🌐',
  },
  {
    title: 'Data Structures & Algorithms',
    duration: '16 Weeks',
    modules: '20 Modules',
    level: 'Intermediate to Advanced',
    color: 'from-purple-500 to-pink-500',
    icon: '🧮',
  },
  {
    title: 'Full Stack Java',
    duration: '20 Weeks',
    modules: '25 Modules',
    level: 'Intermediate',
    color: 'from-orange-500 to-red-500',
    icon: '☕',
  },
  {
    title: 'DevOps & Cloud',
    duration: '14 Weeks',
    modules: '18 Modules',
    level: 'Intermediate to Advanced',
    color: 'from-green-500 to-teal-500',
    icon: '☁️',
  },
  {
    title: 'MERN Stack Development',
    duration: '18 Weeks',
    modules: '22 Modules',
    level: 'Intermediate',
    color: 'from-cyan-500 to-blue-500',
    icon: '⚛️',
  },
  {
    title: 'PHP Web Developer Framework 2.0',
    duration: '10 Weeks',
    modules: '12 Modules',
    level: 'Beginner to Intermediate',
    color: 'from-indigo-500 to-purple-500',
    icon: '🐘',
  },
];

export function FeaturedPrograms() {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Training Programs</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
              Featured Training Programs
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Industry-relevant courses designed by experts to make you job-ready
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-border/50">
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300">{course.icon}</span>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="text-sm">{course.modules}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <BarChart3 className="w-4 h-4 text-accent" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore All Programs
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
