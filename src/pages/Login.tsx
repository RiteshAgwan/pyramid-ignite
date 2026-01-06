import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    console.log('Login attempted:', credentials);
    alert('Login functionality will be implemented with backend integration.');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-display font-bold text-primary-foreground">P</span>
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground">Employee Login</h1>
              <p className="text-muted-foreground mt-2 text-sm">
                Access your Pyramid Consulting dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="you@pyramidconsulting.in"
                    className="pl-10"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full">
                <Lock className="w-5 h-5" />
                Sign In
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Contact{' '}
                <a href="mailto:support@pyramidconsulting.in" className="text-primary hover:underline">
                  IT Support
                </a>
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
