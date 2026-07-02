import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
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
  { id: "amber-wave", title: "Amber Wave", year: 2024, medium: "Carved poplar, stain", dimensions: '48" × 18" × 6"', image: work1, available: true, price: "Inquire" },
  { id: "solstice", title: "Solstice", year: 2023, medium: "Bent pine, natural finish", dimensions: '60" diameter × 8"', image: work2, available: true, price: "Inquire" },
  { id: "indigo-column", title: "Indigo Column", year: 2024, medium: "Carved birch, pigmented wax", dimensions: '84" × 30" × 30"', image: work3, available: false },
  { id: "riverbed", title: "Riverbed", year: 2022, medium: "Ebonized oak, cherry", dimensions: '72" × 24" × 5"', image: work4, available: true, price: "Inquire" },
  { id: "cirrus", title: "Cirrus", year: 2023, medium: "Painted basswood", dimensions: '96" × 48" × 12"', image: work5, available: false },
  { id: "crevice-vii", title: "Crevice VII", year: 2024, medium: "Layered maple, amber stain", dimensions: '36" × 36" × 8"', image: work6, available: true, price: "Inquire" },
];
