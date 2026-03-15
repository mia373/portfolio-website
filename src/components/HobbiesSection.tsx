import { motion } from "framer-motion";
import { Gamepad2, MapPin } from "lucide-react";
import WorldMap from "./WorldMap";
import stardewIcon from "@/assets/stardew-icon.jpg";
import zeldaIcon from "@/assets/zelda-icon.jpg";
import acnhIcon from "@/assets/acnh-icon.jpg";
import persona5Icon from "@/assets/persona5-icon.jpg";

const games = [
  { name: "Stardew Valley", icon: stardewIcon },
  { name: "Zelda: Breath of the Wild", icon: zeldaIcon },
  { name: "Animal Crossing", icon: acnhIcon },
  { name: "Persona 5 Royal", icon: persona5Icon },
];

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-16 relative">
      <div className="absolute inset-0 bg-blob-2 opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            Beyond Code 🌈
          </h2>
          <p className="text-muted-foreground font-body text-lg">The fun stuff that keeps me going</p>
        </motion.div>

        <div className="grid md:grid-cols-[7fr_3fr] gap-8 items-stretch">
          {/* Traveling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky/20 flex items-center justify-center">
                <MapPin className="text-sky" size={20} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Places I've Been ✈️
              </h3>
            </div>
            <WorldMap />
          </motion.div>

          {/* Games */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-lavender/20 flex items-center justify-center">
                <Gamepad2 className="text-lavender" size={20} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Favorite Games 🎮
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {games.map((game, i) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors"
                >
                  <img src={game.icon} alt={game.name} className="w-10 h-10 rounded-lg object-cover" />
                  <span className="font-body text-sm font-medium text-foreground">{game.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
