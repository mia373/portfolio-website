import { motion } from "framer-motion";
import painting1 from "@/assets/painting1.jpg";
import painting2 from "@/assets/painting2.jpg";
import painting3 from "@/assets/painting3.jpg";
import painting4 from "@/assets/painting4.jpg";

const paintings = [
  { src: painting1, title: "Sunset Mountains", size: "tall" },
  { src: painting2, title: "Garden Bloom", size: "normal" },
  { src: painting3, title: "Ocean Waves", size: "normal" },
  { src: painting4, title: "City Nights", size: "wide" },
];

const PaintingsSection = () => {
  return (
    <section id="paintings" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            My Paintings 🎨
          </h2>
          <p className="text-muted-foreground font-body text-lg">Colors on canvas, stories in strokes</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {paintings.map((painting, i) => (
            <motion.div
              key={painting.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                painting.size === "tall"
                  ? "row-span-2"
                  : painting.size === "wide"
                  ? "col-span-2"
                  : ""
              }`}
            >
              <img
                src={painting.src}
                alt={painting.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <p className="text-background font-display font-medium text-sm p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {painting.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingsSection;
