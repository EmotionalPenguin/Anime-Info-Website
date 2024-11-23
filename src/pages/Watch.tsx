import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const streamingServices = [
  {
    name: "Crunchyroll",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=500",
    description: "World's largest anime streaming service",
    link: "https://www.crunchyroll.com"
  },
  {
    name: "Funimation",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=500",
    description: "Home of dubbed anime content",
    link: "https://www.funimation.com"
  },
  {
    name: "HIDIVE",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=500",
    description: "Exclusive anime streaming platform",
    link: "https://www.hidive.com"
  }
];

export default function Watch() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Watch Anime</h1>
        <p className="text-xl text-muted-foreground">
          Find your favorite anime on these legal streaming platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {streamingServices.map((service) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}