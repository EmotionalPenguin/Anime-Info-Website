import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Manga() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Manga Library</h1>
        <p className="text-xl text-muted-foreground">
          Explore our vast collection of manga across different genres.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Action", "Romance", "Fantasy"].map((genre) => (
          <motion.div
            key={genre}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{genre}</h3>
              <p className="text-muted-foreground">
                Discover the best {genre.toLowerCase()} manga series.
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}