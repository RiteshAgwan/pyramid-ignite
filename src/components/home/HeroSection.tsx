import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">12+ Years of Excellence</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Pyramid Consulting</span> <span className="text-foreground">& IT Learnings</span>
            </h1>

            <p className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
              <span className="gradient-text">Design</span> — Deliver — <span className="gradient-text">Delight</span>
            </p>

            <p className="text-xl md:text-2xl text-foreground font-medium">
              Empowering Future Engineers with Expert IT Training
            </p>

            <p className="text-lg text-muted-foreground max-w-xl">
              Nurturing skills for Product-based, Service-based & Company-specific placements across India and globally.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/services">
                <Button variant="hero" size="xl">
                  Explore Our Training Programs
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  <Play className="w-5 h-5" />
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-3xl shadow-2xl p-8 gradient-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">IT Training Excellence</h3>
                      <p className="text-muted-foreground">Industry-Ready Skills</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4">
                      <div className="text-3xl font-display font-bold gradient-text">92%</div>
                      <div className="text-sm text-muted-foreground">Placement Rate</div>
                    </div>
                    <div className="bg-muted rounded-xl p-4">
                      <div className="text-3xl font-display font-bold gradient-text">50K+</div>
                      <div className="text-sm text-muted-foreground">Placed Students</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold border-2 border-card">
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">100+ Industry Trainers</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-6 py-3 shadow-lg animate-float">
                <span className="font-semibold">🚀 Pan-India Presence</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-6 py-3 shadow-lg border border-border animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-semibold text-foreground">50+ Hiring Partners</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
