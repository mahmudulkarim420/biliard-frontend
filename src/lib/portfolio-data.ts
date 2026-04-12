// ─── Local Assets ─────────────────────────────────────────────────────────────
import port1 from "@/assets/img (2).png";
import port2 from "@/assets/img (3).png";
import port3 from "@/assets/img (4).png";
import port4 from "@/assets/img (5).png";
import port5 from "@/assets/img (6).png";
import port6 from "@/assets/img (7).png";

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export const portfolioData: PortfolioItem[] = [
  { 
    id: 1, 
    title: "Newcastle Brand", 
    category: "Branding", 
    image: port1,
    description: "A comprehensive brand identity project for Newcastle, focusing on modern aesthetics and heritage values."
  },
  { 
    id: 2, 
    title: "Minimalist Setup", 
    category: "Web Design", 
    image: port2,
    description: "A clean and minimalist web design approach for a creative agency showcase."
  },
  { 
    id: 3, 
    title: "Corporate Identity", 
    category: "Development", 
    image: port3,
    description: "Robust development of a corporate platform with integrated brand management tools."
  },
  { 
    id: 4, 
    title: "Mobile App Wireframe", 
    category: "App", 
    image: port4,
    description: "Interactive wireframing and prototyping for a high-performance wellness mobile application."
  },
  { 
    id: 5, 
    title: "Product Brochure", 
    category: "Brochure", 
    image: port5,
    description: "High-quality print and digital brochure design for luxury furniture products."
  },
  { 
    id: 6, 
    title: "E-Commerce Strategy", 
    category: "Development", 
    image: port6,
    description: "Scalable e-commerce solution developed with a focus on conversion optimization and user experience."
  },
];
