import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Sprout, Heart, Cpu, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const sectors = [
    { icon: <TrendingUp className="h-8 w-8" />, name: 'Fintech', description: 'Digital payments & financial inclusion' },
    { icon: <Sprout className="h-8 w-8" />, name: 'AgriTech', description: 'Smart farming & food security' },
    { icon: <Heart className="h-8 w-8" />, name: 'HealthTech', description: 'Healthcare access & innovation' },
    { icon: <Cpu className="h-8 w-8" />, name: 'AI & Data', description: 'Intelligence & automation' },
    { icon: <Zap className="h-8 w-8" />, name: 'Green Energy', description: 'Sustainable power solutions' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Empowering African Founders to Raise Capital
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8">
                Afritech Capital Ghana helps founders prepare for successful fundraising through expert strategy, financial modeling, and compelling pitch decks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slide-up hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="African tech founders collaborating on innovative startup solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We empower African founders to successfully raise capital by providing expert business strategy, 
              financial modeling, compelling investor pitch decks, and fundraising guidance. Our focus is on 
              helping founders articulate their vision, demonstrate their potential, and secure the funding 
              they need to build solutions that drive real impact across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Sectors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industries We Support</h2>
            <p className="text-lg text-muted-foreground">
              Helping founders across key technology sectors raise capital
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth animate-slide-up hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center text-primary mb-4">
                    {sector.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{sector.name}</h3>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to raise capital for your startup? Let's prepare you for fundraising success together.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
