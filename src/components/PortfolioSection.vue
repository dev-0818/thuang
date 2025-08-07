<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container">
      <div class="section-title fade-in">
        <h2>Recent Projects</h2>
        <p>Explore a selection of my latest interior design projects, showcasing diverse styles and spaces.</p>
      </div>
      <div class="portfolio-grid">
        <div
          class="portfolio-item fade-in"
          v-for="project in portfolio"
          :key="project.id"
          @click="emit('openModal', project)"
        >
          <img :src="project.image" :alt="project.title" />
          <div class="portfolio-overlay">
            <h3>{{ project.title }}</h3>
            <p>{{ project.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolio: Project[] = [
  {
    id: 1,
    title: 'Modern Penthouse',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    description: 'A luxurious penthouse featuring clean lines, premium materials, and stunning city views.',
  },
  {
    id: 2,
    title: 'Cozy Family Home',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    description: 'Warm and inviting family spaces designed for comfort and functionality.',
  },
  {
    id: 3,
    title: 'Boutique Office',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    description: 'Creative workspace that inspires productivity and collaboration.',
  },
  {
    id: 4,
    title: 'Luxury Bedroom',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    description: 'Serene master bedroom with custom furnishings and thoughtful lighting.',
  },
  {
    id: 5,
    title: 'Modern Kitchen',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    description: 'Contemporary kitchen design featuring premium appliances and smart storage solutions.',
  },
  {
    id: 6,
    title: 'Elegant Living Room',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    description: 'Sophisticated living space balancing comfort with timeless elegance.',
  },
];

const emit = defineEmits(['openModal']);
</script>

<style scoped>
/* Paste the styles for the .portfolio-section, .portfolio-grid, etc. here */
.portfolio-section {
  background: var(--gray-light);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.portfolio-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  aspect-ratio: 4/3;
}

.portfolio-item:hover {
  transform: scale(1.05);
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.portfolio-overlay h3 {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>