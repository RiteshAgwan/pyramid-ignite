import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                  Get in <span className="gradient-text">Touch</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ready to transform your institution's placement outcomes? 
                  Let's discuss how we can help you achieve your goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal>
                <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="john@institution.edu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Institution Name
                        </label>
                        <Input
                          placeholder="Your College/University"
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your training requirements..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" variant="gradient" size="lg" className="w-full">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal delay={200}>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Reach out to us through any of the following channels. We're here to help you achieve placement excellence.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Hyderabad Office */}
                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Hyderabad Office</h3>
                          <p className="text-muted-foreground text-sm">
                            Cokarma – Coworking Space, Gandipet Main Road, Kokapet, Hyderabad
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                          <Phone className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <a href="tel:+919000352999" className="text-accent hover:underline">
                            +91 9000352999
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                          <Mail className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a href="mailto:info@pyramidconsulting.in" className="text-accent hover:underline">
                            info@pyramidconsulting.in
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                          <Clock className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                          <p className="text-muted-foreground text-sm">
                            Monday - Saturday: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Cokarma – Coworking Space, Gandipet Main Road, Kokapet, Hyderabad
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
