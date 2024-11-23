import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function News() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Anime News</h1>
        <p className="text-xl text-muted-foreground">
          Stay updated with the latest news from the anime industry.
        </p>
      </motion.div>

      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Latest Anime News {i}</h2>
              <p className="text-muted-foreground mb-4">
                Breaking news and updates from the world of anime.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: {new Date().toLocaleDateString()}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}