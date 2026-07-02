import jellyfish from "@/assets/jellyfish.jpg.asset.json";
import stones from "@/assets/stones.jpg.asset.json";
import woven from "@/assets/woven.jpg.asset.json";
import work4 from "@/assets/work4.jpg";
import work5 from "@/assets/work5.jpg";
import work6 from "@/assets/work6.jpg";

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
  { id: "jellyfish-drift", title: "Jellyfish Drift", year: 2024, medium: "Mixed media on canvas", dimensions: '24" × 12"', image: jellyfish.url, available: true, price: "Inquire" },
  { id: "river-stones", title: "River Stones", year: 2023, medium: "Mixed media on canvas", dimensions: '36" × 24"', image: stones.url, available: true, price: "Inquire" },
  { id: "woven-earth", title: "Woven Earth", year: 2024, medium: "Mixed media, handmade paper on canvas", dimensions: '30" × 30"', image: woven.url, available: true, price: "Inquire" },
  { id: "riverbed", title: "Riverbed", year: 2022, medium: "Mixed media on canvas", dimensions: '48" × 24"', image: work4, available: true, price: "Inquire" },
  { id: "cirrus", title: "Cirrus", year: 2023, medium: "Mixed media on canvas", dimensions: '36" × 24"', image: work5, available: false },
  { id: "crevice-vii", title: "Crevice VII", year: 2024, medium: "Mixed media on canvas", dimensions: '24" × 24"', image: work6, available: true, price: "Inquire" },
];
