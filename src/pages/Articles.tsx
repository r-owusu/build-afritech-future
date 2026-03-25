import { useState } from "react";
import { Calendar, User, ArrowRight, X, Copy, Share2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Articles = () => {
    const [open, setOpen] = useState(false);
    const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard");
    };

    const handleShare = (article: typeof articles[0]) => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href,
            }).catch(console.error);
        } else {
            handleCopyLink();
        }
    };

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
                        Our Research Articles
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stay updated with our latest insights, comprehensive articles, and strategic analysis of the African tech landscape.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <Dialog key={article.id} onOpenChange={(isOpen) => {
                            setOpen(isOpen);
                            if (isOpen) setSelectedArticleId(article.id);
                        }}>
                            <DialogTrigger asChild>
                                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden h-full flex flex-col justify-between">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-4">
                                                <Badge variant="secondary" className="font-normal text-xs px-2 py-0.5 h-auto">
                                                    {article.category}
                                                </Badge>
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {article.date}
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                                                {article.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed mb-6">
                                                {article.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                                            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                                <User className="h-4 w-4 text-primary" />
                                                {article.author}
                                            </div>
                                            <span className="text-primary text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                                                READ <ArrowRight className="h-3 w-3" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-[85vh] p-0 flex flex-col bg-background border-none shadow-2xl overflow-hidden sm:rounded-xl [&>button]:hidden">
                                <div className="relative flex flex-col h-full overflow-hidden">
                                    {/* Custom Close Button */}
                                    <DialogClose className="absolute right-6 top-6 z-50 p-2 rounded-full bg-background/50 backdrop-blur-md hover:bg-muted transition-colors border border-border/50">
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Close</span>
                                    </DialogClose>

                                    <div className="flex-1 overflow-y-auto min-h-0 scroll-smooth">
                                        <div className="px-8 py-12 md:px-16 md:py-16 max-w-3xl mx-auto">
                                            <div className="mb-8 text-center space-y-4">
                                                <Badge variant="outline" className="mb-4">{article.category}</Badge>
                                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
                                                    {article.title}
                                                </h2>
                                                <div className="flex items-center justify-center gap-6 text-muted-foreground pt-4 text-sm uppercase tracking-widest font-medium">
                                                    <span>{article.date}</span>
                                                    <span>•</span>
                                                    <span>{article.readTime}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-2 pt-2">
                                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <User className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-semibold text-foreground">{article.author}</span>
                                                </div>
                                            </div>

                                            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground/90 pb-8">
                                                {article.content.split('\n\n').map((paragraph, idx) => (
                                                    <p key={idx} className={`mb-6 ${idx === 0
                                                        ? "first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]"
                                                        : "indent-8"
                                                        }`}>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>

                                            <div className="mt-8 pt-8 border-t flex justify-between items-center text-sm text-muted-foreground">
                                                <div className="flex gap-4">
                                                    <Button variant="ghost" size="sm" className="gap-2" onClick={handleCopyLink}>
                                                        <Copy className="h-4 w-4" />
                                                        Copy Link
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="gap-2" onClick={() => handleShare(article)}>
                                                        <Share2 className="h-4 w-4" />
                                                        Share Article
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <style>{`
          .prose p {
              margin-bottom: 1.5em;
          }
      `}</style>
        </div>
    );
};

export default Articles;
