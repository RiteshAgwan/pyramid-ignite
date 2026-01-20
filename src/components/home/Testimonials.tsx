import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Quote } from 'lucide-react';

// Partner photos
import vijayaMairPhoto from '@/assets/partners/vijaya-mair.png';
import amitYadavPhoto from '@/assets/partners/amit-yadav.png';
import drSaravananPhoto from '@/assets/partners/dr-saravanan.png';
import drVijayKarthikPhoto from '@/assets/partners/dr-vijay-karthik.png';

const partners = [
  {
    name: 'Vijaya Mair',
    designation: 'Associate Dean – Campus and Corporate Relations',
    college: 'CVR College of Engineering, Hyderabad',
    photo: vijayaMairPhoto,
  },
  {
    name: 'Amit Yadav',
    designation: 'DGM – Training and Placements / Corporate Interface Expert',
    college: '',
    photo: amitYadavPhoto,
  },
  {
    name: 'Dr. V. Saravanan',
    designation: 'Training and Placement Officer',
    college: 'M. Kumarasamy College of Engineering',
    photo: drSaravananPhoto,
  },
  {
    name: 'Dr. M. Vijay Karthik',
    designation: 'Training and Placement Officer',
    college: 'CMR Engineering College',
    photo: drVijayKarthikPhoto,
  },
  {
    name: 'Prof. R. Mageshwaran',
    designation: 'Director – Training and Placement',
    college: 'Global Academy of Technology',
    photo: null, // No photo uploaded for this partner
  },
];

export function Testimonials() {
  return (
    <section className="py-24 navy-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2">
              What Our Partners Say
            </h2>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
              Trusted by leading academic institutions across India
            </p>
          </div>
        </ScrollReveal>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 0.1}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-3 border-accent/30 shadow-lg">
                  {partner.photo ? (
                    <img 
                      src={partner.photo} 
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">
                        {partner.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-accent/50 mb-3" />

                {/* Name */}
                <h4 className="font-display text-lg font-bold text-primary-foreground mb-2">
                  {partner.name}
                </h4>

                {/* Designation */}
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  {partner.designation}
                </p>

                {/* College */}
                {partner.college && (
                  <p className="text-accent text-xs font-medium mt-auto pt-2">
                    {partner.college}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
