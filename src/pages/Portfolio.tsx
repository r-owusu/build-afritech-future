import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Sprout, Heart } from 'lucide-react';

const Portfolio = () => {
  const startups = [
    {
      name: 'PayLink',
      sector: 'Fintech',
      icon: <TrendingUp className="h-8 w-8" />,
      description: 'We helped PayLink refine their business model, build comprehensive financial projections, and create a compelling pitch deck that secured their Series A funding.',
      stage: 'Raised Series A',
    },
    {
      name: 'AgroNova',
      sector: 'AgriTech',
      icon: <Sprout className="h-8 w-8" />,
      description: 'We provided AgroNova with strategic guidance on market positioning and investor targeting that led to a successful seed round.',
      stage: 'Raised Seed',
    },
    {
      name: 'MediServe',
      sector: 'HealthTech',
      icon: <Heart className="h-8 w-8" />,
      description: 'We worked with MediServe to develop detailed financial models and a pitch deck that resonated with impact investors, securing pre-seed funding.',
      stage: 'Raised Pre-Seed',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've helped founders across diverse sectors successfully raise capital and grow their startups.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {startups.map((startup, index) => (
              <Card key={index} className="hover:shadow-xl transition-smooth animate-slide-up hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary">{startup.icon}</div>
                    <Badge variant="secondary">{startup.stage}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{startup.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-accent">
                    {startup.sector}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{startup.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Raise Capital?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Building something innovative? We'd love to help you prepare for successful fundraising and connect with the right investors.
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

export default Portfolio;
