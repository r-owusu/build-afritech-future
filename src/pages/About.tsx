import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import cityscapeImage from '@/assets/african-cityscape.jpg';
import innovationSpaceImage from '@/assets/innovation-space.jpg';

const About = () => {
  const values = [
    { icon: <Target className="h-10 w-10" />, title: 'Innovation', description: 'We champion bold ideas that push boundaries and create new possibilities.' },
    { icon: <Award className="h-10 w-10" />, title: 'Integrity', description: 'We build trust through transparency, honesty, and ethical practices.' },
    { icon: <Eye className="h-10 w-10" />, title: 'Impact', description: 'We measure success by the positive change we create in communities.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Afritech Capital Ghana is a business advisory firm focused on helping African tech founders 
              prepare for successful fundraising.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Text + Image Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We help African founders bridge the gap between their innovative ideas and investor funding. 
                  Through expert business strategy, financial modeling, pitch deck development, and fundraising 
                  guidance, we prepare founders to present compelling cases to investors and successfully 
                  secure the capital they need to grow.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in Accra's thriving tech ecosystem, we understand both the unique challenges African 
                  founders face and what global investors look for when evaluating opportunities.
                </p>
              </div>
              
              <div className="animate-slide-up">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={cityscapeImage} 
                    alt="Modern African cityscape showing urban development and innovation in Accra, Ghana"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
                  <p className="text-muted-foreground">
                    To empower African founders to successfully raise capital by equipping them with the 
                    strategy, tools, and guidance needed to secure funding and build solutions for a better, 
                    connected future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Vision</h3>
                  <p className="text-muted-foreground">
                    A continent where technology drives opportunity for all.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Innovation Space Image */}
            <div className="animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={innovationSpaceImage} 
                  alt="African tech innovation hub with entrepreneurs and developers collaborating in modern workspace"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Our ecosystem: Where Africa's brightest minds build the future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              Principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth animate-slide-up">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
