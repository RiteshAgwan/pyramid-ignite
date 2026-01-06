import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Team', path: '/team' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-primary-foreground font-display font-bold text-xl">P</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-lg text-foreground">Pyramid</span>
            <span className="font-display font-medium text-sm text-muted-foreground block -mt-1">Consulting</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                location.pathname === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant="nav-cta" size="default">
              Employee Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
              <Button variant="gradient" className="w-full">
                Employee Login
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
