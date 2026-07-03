import jellyfish from "@/assets/jellyfish-framed.jpg.asset.json";
import stones from "@/assets/stones-framed.jpg.asset.json";
import woven from "@/assets/woven-framed.jpg.asset.json";
import annettesGarden from "@/assets/annettes-garden-framed.jpg.asset.json";
import lastSunset from "@/assets/last-sunset-framed.jpg.asset.json";
import goldenThaw from "@/assets/golden-thaw-framed.jpg.asset.json";
import gardenVisitor from "@/assets/garden-visitor-framed.jpg.asset.json";
import tidalBloom from "@/assets/tidal-bloom-framed.jpg.asset.json";
import notForSale from "@/assets/not-for-sale-framed.jpg.asset.json";
import kachina from "@/assets/kachina-framed.jpg.asset.json";
import circles from "@/assets/circles-framed.jpg.asset.json";
import redPanels from "@/assets/red-panels-framed.jpg.asset.json";

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
  { id: "jellyfish-drift", title: "Jellyfish 3", year: 2026, medium: "Mixed media on canvas", dimensions: '10" × 20"', image: jellyfish.url, available: true, price: "Inquire" },
  { id: "river-stones", title: "Tumbled Light", year: 2026, medium: "Watercolor Paper", dimensions: '16" × 24"', image: stones.url, available: true, price: "Inquire" },
  { id: "weaving-my-way", title: "Weaving My Way", year: 2026, medium: "Mixed media", dimensions: '10" × 10"', image: woven.url, available: true, price: "Inquire" },
  { id: "annettes-garden", title: "Annette's Garden", year: 2026, medium: "Mixed media on canvas", dimensions: '30" × 24"', image: annettesGarden.url, available: true, price: "Inquire" },
  { id: "last-sunset", title: "Last Sunset", year: 2026, medium: "Mixed media on cradleboard", dimensions: '18" × 18"', image: lastSunset.url, available: true, price: "Inquire" },
  { id: "golden-thaw", title: "Pale Ruins", year: 2026, medium: "Mixed media on cradleboard", dimensions: '12" × 12"', image: goldenThaw.url, available: true, price: "Inquire" },
  { id: "garden-visitor", title: "Butterfly Journey", year: 2026, medium: "Mixed media, collage on cradleboard", dimensions: '12" × 12"', image: gardenVisitor.url, available: true, price: "Inquire" },
  { id: "tidal-bloom", title: "Falling Blooms", year: 2026, medium: "Mixed media on canvas", dimensions: '12" × 12"', image: tidalBloom.url, available: true, price: "Inquire" },
  { id: "not-for-sale", title: "Not For Sale", year: 2026, medium: "Mixed media/cold wax on cradleboard", dimensions: '12" × 12"', image: notForSale.url, available: false },
  { id: "blue-corn-maiden", title: "Blue Corn Maiden", year: 2026, medium: "Acrylic on canvas", dimensions: '18" × 32"', image: kachina.url, available: true, price: "Inquire" },
  { id: "biospheres", title: "Biospheres", year: 2026, medium: "Mixed media/cold wax/oil on cradleboard", dimensions: '12" × 12"', image: circles.url, available: true, price: "Inquire" },
  { id: "red-between-the-lines", title: "Red between the lines", year: 2026, medium: "Mixed media", dimensions: '18" × 24"', image: redPanels.url, available: true, price: "Inquire" },
];
