import { useState, useEffect } from 'react';
import { FileText, Download, Calendar, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TypewriterText = ({ text, delay = 100 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{displayedText}</span>;
};

const Resources = () => {
    // Static data for monthly reports
    // ... (omitted for brevity)

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
                        Monthly Reports
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stay updated with our latest insights, comprehensive reports, and strategic analysis of the African tech landscape.
                    </p>

                    {/* Coming Soon Section */}
                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 mb-8">

                        <h2 className="text-3xl font-bold text-primary">
                            <TypewriterText text="Coming Soon..." />
                            <span className="animate-blink">|</span>
                        </h2>
                        {/* <p className="text-muted-foreground max-w-md">
                            We are currently preparing our latest reports. Please check back soon for detailed monthly insights and analysis.
                        </p> */}
                    </div>
                </div>

                {/* Grid omitted */}
            </div>
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
            `}</style>
        </div>
    );
};

export default Resources;
