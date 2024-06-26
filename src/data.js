import tour1 from "./media/tour-1.jpg";
import tour2 from "./media/tour-2.jpg";
import tour3 from "./media/tour-3.jpg";
import tour4 from "./media/tour-4.jpg";
import tour5 from "./media/tour-5.jpg";
import tour6 from "./media/tour-6.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "New Orleans",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "louisiana",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "explore the canyons",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "arizona",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "air balloon",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "utah",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2024",
    title: "City Tour",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Manhattan",
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: "February 1st, 2025",
    title: "Circle Bay Oahu",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Hawaii",
    duration: 6,
    cost: 2100,
  },
  {
    id: 6,
    image: tour6,
    date: "March 14th, 2025",
    title: "Lake Tahoe",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "California",
    duration: 11,
    cost: 1400,
  },
];
