import { Target, TrendingUp, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Business Strategy',
      description: 'Develop a clear, compelling business strategy that demonstrates market opportunity, competitive advantage, and scalability to potential investors.',
      features: ['Market analysis', 'Competitive positioning', 'Growth strategy', 'Business model refinement'],
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Financial Modeling',
      description: 'Build robust financial projections and models that showcase your startup\'s potential and help investors understand your path to profitability.',
      features: ['Revenue projections', 'Cost structure analysis', 'Scenario planning', 'Valuation modeling'],
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Investor Pitch Decks',
      description: 'Create professional, compelling pitch decks that capture investor attention and clearly communicate your vision, traction, and opportunity.',
      features: ['Deck design', 'Storytelling', 'Data visualization', 'Investor-ready materials'],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Fundraising Guidance',
      description: 'Navigate the fundraising process with expert guidance on investor targeting, outreach strategy, due diligence preparation, and negotiation.',
      features: ['Investor targeting', 'Pitch coaching', 'Due diligence prep', 'Term sheet guidance'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide comprehensive advisory services to help African founders prepare for successful 
              fundraising — from strategy development to pitch perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-smooth animate-slide-up">
                <CardHeader>
                  <div className="text-primary mb-4">{program.icon}</div>
                  <CardTitle className="text-2xl mb-4">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                At Afritech Capital Ghana, we understand that successfully raising capital requires more 
                than just a good idea. That's why our approach combines strategic thinking, financial rigor, 
                compelling storytelling, and practical fundraising expertise.
              </p>
              <p className="leading-relaxed">
                Our team has deep experience in both the African tech ecosystem and global investment 
                landscape. We leverage this knowledge to help founders craft narratives and build models 
                that resonate with investors while staying true to their vision.
              </p>
              <p className="leading-relaxed">
                We're committed to being trusted advisors throughout your fundraising journey — from 
                initial strategy through to closing your round.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
