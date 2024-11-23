import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Book, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        <div className="relative h-full flex items-center">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl space-y-4"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Welcome to AnimeHub
              </h1>
              <p className="text-muted-foreground text-xl">
                Your ultimate destination for anime and manga content. Discover, watch, and read your favorite series all in one place.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/watch">Start Watching</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/manga">Read Manga</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Play className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Watch Anime</h3>
            <p className="text-muted-foreground">
              Stream your favorite anime series from multiple legal sources in high quality.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Read Manga</h3>
            <p className="text-muted-foreground">
              Access a vast library of manga across different genres and publishers.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get the latest news and updates from the anime and manga industry.
            </p>
          </Card>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=500")`
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">Featured Anime Title {i}</h4>
                <p className="text-sm text-muted-foreground">
                  Latest episode available now
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}