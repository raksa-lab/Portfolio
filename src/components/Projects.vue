<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <article
      v-for="project in projects"
      :key="`project-${project.id}`"
      class="container-card overflow-hidden group"
    >
      <div class="relative overflow-hidden">
        <img
          :src="project.image"
          :alt="`Screenshot of ${project.title} project`"
          class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          :width="400"
          :height="160"
        />
      </div>
      <div class="p-4 space-y-2">
        <h3 class="font-semibold text-lg">{{ project.title }}</h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-300">
          {{ project.description }}
        </p>
        <div
          class="flex flex-wrap gap-2 pt-2"
          role="list"
          aria-label="Technologies used"
        >
          <span
            v-for="tag in project.tags"
            :key="`${project.id}-${tag}`"
            class="px-2 py-1 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700"
            role="listitem"
          >
            {{ tag }}
          </span>
        </div>
        <div class="pt-3 flex gap-3">
          <a
            :href="project.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
            :aria-label="`View live demo of ${project.title}`"
          >
            Live Demo
          </a>
          <a
            :href="project.codeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
            :aria-label="`View source code for ${project.title}`"
          >
            Source Code 
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
// Import your local image
import IshopImg from "../assets/Ishop.jpg";
import Rservation from "../assets/Resevarion.jpg";
import Ecomerce from "../assets/Ecommerce.png";
import Football from "../assets/Football.png";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const projects: readonly Project[] = Object.freeze([
  {
    id: "Reservation Management System",
    title: "Reservation Management System",
    description:
      "The Hotel Reservation System is a desktop app that manages rooms, guests, bookings, and billing in one place, making hotel operations faster and more accurate.",
    image: Rservation, // Use the imported image here;
    tags: ["Java", "MySQL Database", "Java Swing GUI", "CRUD Operations"],
    demoUrl:
      "https://ruppedukh-my.sharepoint.com/:v:/g/personal/nov_raksa_2823_rupp_edu_kh/EScmoq_h6k1LuPV1cYmYEkQBa-KPDnn4ShYBO0Jy2tZVQA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=bkt7wO",
    codeUrl: "https://github.com/raksa-lab/Hotel_Reservation_System",
  },
  {
    id: "IShop",
    title: "IShop",
    description:
      "The iShop System is an e-commerce platform that lets users browse products, add items to a cart, and place orders, while admins manage inventory and sales.",
    image: IshopImg, // Use the imported image here
    tags: ["Vue 3", "Tailwind CSS", "SEO", "Performance"],
    demoUrl:
      "https://ruppedukh-my.sharepoint.com/personal/nov_raksa_2823_rupp_edu_kh/_layouts/15/stream.aspx?id=%2Fpersonal%2Fnov%5Fraksa%5F2823%5Frupp%5Fedu%5Fkh%2FDocuments%2FVideo%2FDemo%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Efa1920f2%2D2c1a%2D4016%2Dad6a%2D4b00029eeb8f",
    codeUrl: "https://github.com/raksa-lab/P.ISTAD",
  },
  {
    id: "Ecommerce Shopping System",
    title: "Ecommerce Shopping System",
    description:
      "The E-commerce Shopping System in C++ is a simple program where customers can order products, add items to a cart, and checkout, while admins can manage products and it run in Terminal.",
    image: Ecomerce, // Use the imported image here
    tags: ["C++", "OOP"],
    demoUrl: "#",
    codeUrl: "https://github.com/raksa-lab/Ecommerce-System-Cpp",
  },
  {
    id: "Player Football",
    title: "Player Football",
    description:
    "The Football Player System in HTML and Bootstrap displays player details (name, position, Champain) using responsive cards and tables.",
    image: Football,
    tags: ["HTML5", "Bootstrap","Responsive"],
    demoUrl: "#",
    codeUrl: "https://github.com/raksa-lab/Web-Bootstrap",
  },
  {
    id: " Attendance_system",
    title: "Attendance_system",
    description:
      "This Project isn't complete yet.Now I'm working on it.",
    image: "/placeholder.svg?height=160&width=400",
    tags: ["React Vite", "Node.js", "My SQL", "Responsive"],
    demoUrl: "#",
    codeUrl: "https://github.com/raksa-lab/Ecommerce-System-Cpp",
  },
]);
</script>
