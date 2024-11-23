import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Upcoming() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Upcoming Releases</h1>
        <p className="text-xl text-muted-foreground">
          Check out the most anticipated upcoming anime releases.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=500")`
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Upcoming Anime {i}</h3>
                <p className="text-muted-foreground mb-4">
                  Coming soon to your favorite streaming platforms.
                </p>
                <div className="text-sm text-muted-foreground">
                  Release Date: Q2 2024
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}