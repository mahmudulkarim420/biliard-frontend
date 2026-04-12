import blogImg1 from "@/assets/img (13).avif";
import blogImg2 from "@/assets/img (19).avif";
import blogImg3 from "@/assets/img (20).avif";
import thumb1 from "@/assets/thumbnail.png";
import thumb2 from "@/assets/thumbnail (1).png";
import thumb3 from "@/assets/thumbnail (2).png";

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  monthYear: string;
  author: string;
  comments: string;
  image: string;
  description?: string;
}

export const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Small brand make a big agency in the world Success Journey We can Provide",
    date: "05",
    monthYear: "Jan\n2024",
    author: "Andrew Hedge",
    comments: "0 Comments",
    image: blogImg1,
    description: "In the modern digital landscape, small brands have the potential to grow into global agencies. The key is to provide consistent value and leverage the right technology to reach your target audience."
  },
  {
    id: 2,
    title: "How to scale your creative agency from zero to hero in 2024",
    date: "12",
    monthYear: "Feb\n2024",
    author: "Sarah Jenkins",
    comments: "5 Comments",
    image: blogImg2,
    description: "Scaling an agency requires a combination of strategic planning, talent management, and a deep understanding of market trends. This guide breaks down the essential steps for growth."
  },
  {
    id: 3,
    title: "UI/UX Design trends that will dominate the industry",
    date: "20",
    monthYear: "Mar\n2024",
    author: "Mike Ross",
    comments: "12 Comments",
    image: blogImg3,
    description: "Design is ever-evolving. From dark mode dominance to micro-interactions, stay ahead of the curve with these UI/UX trends defining 2024 and beyond."
  },
  {
    id: 4,
    title: "The power of storytelling in modern brand identity",
    date: "25",
    monthYear: "Apr\n2024",
    author: "Elena Gilbert",
    comments: "3 Comments",
    image: blogImg1,
    description: "Brands that tell a story connect better with their audience. Learn how to weave a narrative into your brand's DNA for lasting engagement."
  },
  {
    id: 5,
    title: "Mastering digital marketing for small businesses",
    date: "30",
    monthYear: "May\n2024",
    author: "Bonnie Bennett",
    comments: "8 Comments",
    image: blogImg2,
    description: "Digital marketing doesn't have to be expensive. Small businesses can win big with targeted local SEO and organic social media strategies."
  }
];

export const latestNews = [
  { id: 1, title: "UI writing: Copy is an integral part", date: "NOV 22, 2023", img: thumb1 },
  { id: 2, title: "UI writing: Copy is an integral part", date: "NOV 23, 2023", img: thumb2 },
  { id: 3, title: "UI writing: Copy is an integral part", date: "NOV 23, 2023", img: thumb3 },
];

export interface Category {
  name: string;
  count: string;
  active?: boolean;
}

export const categories: Category[] = [
  { name: "Artificial Intelligence", count: "01" },
  { name: "Business Tools", count: "02" },
  { name: "Copywriter Tools", count: "02" },
  { name: "Technology Business", count: "02" },
];

export const tags = ["Business", "App", "Software", "Technology"];
