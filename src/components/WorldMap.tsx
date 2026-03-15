import { useEffect, useRef, useState, useCallback } from "react";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Globe from "react-globe.gl";

type Continent = "north-america" | "south-america" | "europe" | "asia";

const continentColors: Record<Continent, string> = {
  "north-america": "hsl(340, 82%, 59%)",   // pink
  "south-america": "hsl(45, 93%, 58%)",    // gold
  "europe": "hsl(199, 89%, 48%)",          // blue
  "asia": "hsl(160, 64%, 45%)",            // teal
};

interface Place {
  name: string;
  lat: number;
  lng: number;
  continent: Continent;
}

const visitedPlaces: Place[] = [
  // North America
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, continent: "north-america" },
  { name: "New York", lat: 40.7128, lng: -74.006, continent: "north-america" },
  { name: "Chicago", lat: 41.8781, lng: -87.6298, continent: "north-america" },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, continent: "north-america" },
  { name: "Seattle", lat: 47.6062, lng: -122.3321, continent: "north-america" },
  { name: "Boston", lat: 42.3601, lng: -71.0589, continent: "north-america" },
  { name: "Vancouver", lat: 49.2827, lng: -123.1207, continent: "north-america" },
  { name: "Hawaii", lat: 21.3069, lng: -157.8583, continent: "north-america" },
  { name: "Los Cabos", lat: 22.8905, lng: -109.9167, continent: "north-america" },
  { name: "Las Vegas", lat: 36.1699, lng: -115.1398, continent: "north-america" },
  { name: "Quebec", lat: 46.8139, lng: -71.2080, continent: "north-america" },
  { name: "Montreal", lat: 45.5017, lng: -73.5673, continent: "north-america" },
  { name: "Austin", lat: 30.2672, lng: -97.7431, continent: "north-america" },
  // South America
  { name: "Sao Paulo", lat: -23.5505, lng: -46.6333, continent: "south-america" },
  { name: "Santiago", lat: -33.4489, lng: -70.6693, continent: "south-america" },
  // Europe
  { name: "Rome", lat: 41.9028, lng: 12.4964, continent: "europe" },
  { name: "Barcelona", lat: 41.3874, lng: 2.1686, continent: "europe" },
  { name: "Venice", lat: 45.4408, lng: 12.3155, continent: "europe" },
  // Asia
  { name: "Seoul", lat: 37.5665, lng: 126.978, continent: "asia" },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917, continent: "asia" },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, continent: "asia" },
  { name: "Kyoto", lat: 35.0116, lng: 135.7681, continent: "asia" },
  { name: "Busan", lat: 35.1796, lng: 129.0756, continent: "asia" },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, continent: "asia" },
  { name: "Chongqing", lat: 29.4316, lng: 106.9123, continent: "asia" },
  { name: "Yichun", lat: 27.8043, lng: 114.3830, continent: "asia" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, continent: "asia" },
  { name: "Hainan", lat: 19.2000, lng: 109.7500, continent: "asia" },
  { name: "Guilin", lat: 25.2744, lng: 110.2990, continent: "asia" },
  { name: "Tibet", lat: 29.6520, lng: 91.1721, continent: "asia" },
  { name: "Xi'an", lat: 34.3416, lng: 108.9398, continent: "asia" },
];
const MAX_SPARKLES = 20;

interface Sparkle {
  x: number;
  y: number;
  id: number;
  size: number;
  rotation: number;
  dx: number;
  dy: number;
}

const WorldMap = () => {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 450 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const idCounter = useRef(0);
  const lastSpawn = useRef(0);

  const DEFAULT_VIEW = { lat: 30, lng: -150, altitude: 2.2 };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDimensions({ width: w, height: Math.min(w * 0.63, 528) });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;
      globeRef.current.pointOfView(DEFAULT_VIEW, 0);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const now = Date.now();
    if (now - lastSpawn.current < 50) return;
    lastSpawn.current = now;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    idCounter.current += 1;
    const sparkle: Sparkle = {
      x,
      y,
      id: idCounter.current,
      size: 4 + Math.random() * 8,
      rotation: Math.random() * 360,
      dx: (Math.random() - 0.5) * 30,
      dy: (Math.random() - 0.5) * 30 - 10,
    };
    setSparkles((prev) => [...prev.slice(-(MAX_SPARKLES - 1)), sparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 600);
  }, []);

  useEffect(() => {
    if (!isHovering) setSparkles([]);
  }, [isHovering]);

  const handleLabelClick = useCallback((point: any) => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: point.lat, lng: point.lng, altitude: 1.8 },
        800
      );
      setIsZoomed(true);
    }
  }, []);

  const handleReset = useCallback(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(DEFAULT_VIEW, 800);
      setIsZoomed(false);
    }
  }, []);

  const bgColor = "hsla(30, 50%, 97%, 0)";

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full rounded-2xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center cursor-grab active:cursor-grabbing"
      style={{ height: dimensions.height }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Sparkle particles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="pointer-events-none absolute z-10"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            animation: "sparkle-burst 0.6s ease-out forwards",
            ["--dx" as any]: `${s.dx}px`,
            ["--dy" as any]: `${s.dy}px`,
          }}
        >
          {/* 4-point star */}
          <svg viewBox="0 0 20 20" width={s.size} height={s.size}>
            <path
              d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
              fill="hsl(340 82% 59%)"
            />
          </svg>
        </div>
      ))}

      {isZoomed && (
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/80 text-background text-xs font-body font-medium backdrop-blur-sm hover:bg-foreground transition-colors cursor-pointer"
        >
          <RotateCcw size={12} />
          Reset view
        </button>
      )}
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor={bgColor}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        atmosphereColor="hsl(340, 82%, 59%)"
        atmosphereAltitude={0.15}
        pointsData={visitedPlaces}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: any) => continentColors[d.continent as Continent]}
        pointAltitude={0.06}
        pointRadius={0.5}
        pointsMerge={false}
        labelsData={visitedPlaces}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.2}
        labelDotRadius={0.4}
        labelColor={(d: any) => continentColors[d.continent as Continent]}
        labelResolution={2}
        labelAltitude={0.07}
        onLabelClick={handleLabelClick}
      />
    </motion.div>
  );
};

export default WorldMap;
