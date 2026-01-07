import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Import all logos
import cmrLogo from '@/assets/logos/cmr-college.png';
import cvrLogo from '@/assets/logos/cvr-college.png';
import nietLogo from '@/assets/logos/niet.png';
import ksrLogo from '@/assets/logos/ksr-institutions.png';
import kalasalingamLogo from '@/assets/logos/kalasalingam.png';
import srideviLogo from '@/assets/logos/sridevi-college.png';
import scientLogo from '@/assets/logos/scient-institute.png';
import stjosephLogo from '@/assets/logos/st-joseph.png';
import kakatiyaLogo from '@/assets/logos/kakatiya-institute.png';
import jntuLogo from '@/assets/logos/jntu-hyderabad.png';
import osmaniaLogo from '@/assets/logos/osmania-university.png';
import vnrLogo from '@/assets/logos/vnr-vjiet.png';
import rkgitLogo from '@/assets/logos/rkgit.png';
import mkceLogo from '@/assets/logos/mkce.png';
import annamacharyaLogo from '@/assets/logos/annamacharya.png';

const institutions = [
  { name: 'CMR Engineering College', logo: cmrLogo },
  { name: 'CVR College of Engineering', logo: cvrLogo },
  { name: 'NIET (Noida Institute of Engineering & Technology)', logo: nietLogo },
  { name: 'KSR Institutions', logo: ksrLogo },
  { name: 'Kalasalingam University', logo: kalasalingamLogo },
  { name: 'Sridevi College', logo: srideviLogo },
  { name: 'Scient Institute of Technology', logo: scientLogo },
  { name: 'St. Joseph Engineering College', logo: stjosephLogo },
  { name: 'Kakatiya Institute of Technology & Science', logo: kakatiyaLogo },
  { name: 'JNTU Hyderabad', logo: jntuLogo },
  { name: 'Osmania University', logo: osmaniaLogo },
  { name: 'VNR VJIET', logo: vnrLogo },
  { name: 'RKGIT (Raj Kumar Goel Institute of Technology)', logo: rkgitLogo },
  { name: 'M. Kumarasamy College of Engineering', logo: mkceLogo },
  { name: 'Annamacharya University', logo: annamacharyaLogo },
];

export function InstitutionLogos() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Partners
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Trusted Academic Partners
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Collaborating with leading engineering institutions to deliver industry-ready talent.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {institutions.map((institution, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div className="group bg-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border/50 hover:border-primary/20">
                <div className="w-full h-24 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {institution.logo ? (
                    <img
                      src={institution.logo}
                      alt={`${institution.name} logo`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="font-display font-bold text-2xl gradient-text">
                        {institution.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-foreground leading-tight line-clamp-2">
                  {institution.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
