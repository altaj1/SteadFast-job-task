import { FcOnlineSupport } from "react-icons/fc";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
export const statistics = [
    {
      title: 'Product Packing',
      icone: GiBoxUnpacking,
      description:
        'Eco-friendly packaging ensures products arrive safely and sustainably.',
      value: '1,200',
      gradientFrom: 'blue-500',
      gradientTo: 'indigo-500',
    },
    {
      title: '24x7 Support',
      icone: FcOnlineSupport,
      description:
        'Our team is available round-the-clock to assist you with any queries.',
      value: '$50,000',
      gradientFrom: 'green-500',
      gradientTo: 'teal-500',
    },
    {
      title: 'Secure Payment',
      description:
        'Your transactions are protected with advanced security encryption.',
      value: '5',
      icone:RiSecurePaymentLine,
      gradientFrom: 'yellow-500',
      gradientTo: 'orange-500',
    },
  ];
  export const products = [
    {
        id: 1,
        img: "./images/modern-style-gaming-pc-with-water-cooling.avif",
        title: "PC with Water Cooling",
        description: "High-performance gaming PC with advanced water cooling for optimal temperature management."
    },
    {
        id: 2,
        img: "./images/Intel Core i9-14900KS.jpg",
        title: "Intel Core i9-14900KS",
        description: "Intel Core i9-14900KS: 24 cores, 6 GHz, DDR5, PCIe 5.0, extreme performance."
    },
    {
        id: 3,
        img: "./images/34 The best gaming monitor 2024.webp",
        title: "Gaming Monitor 2024",
        description: "2024 gaming monitor: 4K resolution, 240Hz refresh rate, HDR, ultra-responsive display."
    },
    {
        id: 4,
        img: "./images/Logitech-G29-Driving-kit-1024x603.jpg",
        title: "Logitech G29 Driving",
        description: "Realistic force feedback, responsive pedals, 900-degree steering."
    },
    {
        id: 5,
        img: "./images/Apple vision Pro.jpg",
        title: "Apple Vision Pro",
        description: "Apple Vision Pro: immersive AR experience, spatial computing, 4K displays, eye-tracking technology."
    },
    {
        id: 6,
        img: "./images/Buy GIGABYTE RTX 4070TI.webp",
        title: "GIGABYTE RTX 4070TI",
        description: "GIGABYTE RTX 4070 Ti: powerful GPU, 12GB memory, ray tracing, AI-enhanced graphics."
    },
    {
        id: 7,
        img: "./images/Gamaing keyboard_og.jpg",
        title: "Gaming Keyboard",
        description: "Customizable RGB lighting, mechanical switches, programmable keys, anti-ghosting technology."
    },
    {
        id: 8,
        img: "./images/Laptop-with-Pen.jpg",
        title: "Laptop with Pen",
        description: "Versatile touch display, seamless note-taking, drawing capabilities."
    }
];