import jellyfish from "@/assets/jellyfish-framed.jpg.asset.json";
import stones from "@/assets/stones-framed.jpg.asset.json";
import woven from "@/assets/woven-framed.jpg.asset.json";
import annettesGarden from "@/assets/annettes-garden-framed.jpg.asset.json";
import lastSunset from "@/assets/last-sunset-framed.jpg.asset.json";
import goldenThaw from "@/assets/golden-thaw-framed.jpg.asset.json";
import gardenVisitor from "@/assets/garden-visitor-framed.jpg.asset.json";
import tidalBloom from "@/assets/tidal-bloom-framed.jpg.asset.json";

export type Work = {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  image: string;
  available?: boolean;
  price?: string;
};

export const works: Work[] = [
  { id: "jellyfish-drift", title: "Jellyfish 3", year: 2024, medium: "Mixed media on canvas", dimensions: '10" × 20"', image: jellyfish.url, available: true, price: "Inquire" },
  { id: "river-stones", title: "River Stones", year: 2023, medium: "Mixed media on canvas", dimensions: '36" × 24"', image: stones.url, available: true, price: "Inquire" },
  { id: "woven-earth", title: "Woven Earth", year: 2024, medium: "Mixed media, handmade paper on canvas", dimensions: '30" × 30"', image: woven.url, available: true, price: "Inquire" },
  { id: "annettes-garden", title: "Annette's Garden", year: 2025, medium: "Mixed media on canvas", dimensions: '30" × 24"', image: annettesGarden.url, available: true, price: "Inquire" },
  { id: "last-sunset", title: "Last Sunset", year: 2025, medium: "Acrylic and cold wax on panel", dimensions: '24" × 24"', image: lastSunset.url, available: true, price: "Inquire" },
  { id: "golden-thaw", title: "Golden Thaw", year: 2025, medium: "Mixed media, collage on canvas", dimensions: '24" × 24"', image: goldenThaw.url, available: true, price: "Inquire" },
  { id: "garden-visitor", title: "Garden Visitor", year: 2025, medium: "Mixed media, collage on canvas", dimensions: '24" × 24"', image: gardenVisitor.url, available: true, price: "Inquire" },
  { id: "tidal-bloom", title: "Tidal Bloom", year: 2025, medium: "Mixed media on canvas", dimensions: '24" × 24"', image: tidalBloom.url, available: true, price: "Inquire" },
];
