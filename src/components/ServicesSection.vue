<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-title fade-in">
        <h2>Design Services</h2>
        <p>From concept to completion, I provide comprehensive interior design solutions tailored to your lifestyle and budget.</p>
      </div>
      <div class="services-grid">
        <div class="service-card fade-in" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <img :src="service.image" :alt="service.title" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Complete home makeovers, room redesigns, and new construction interior planning.',
    image: '/public/img/service3.jpg',
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    description: 'Office design, retail spaces, restaurants, and hospitality interior solutions.',
    image: '/public/img/service2.jpg',
  },
  {
    id: 3,
    title: 'Space Planning',
    description: 'Optimize your layout for functionality, flow, and maximum use of available space.',
    //image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    image: '/public/img/service1.jpg'
  },
  {
    id: 4,
    title: 'Design Consultation',
    description: 'Expert advice on color schemes, furniture selection, and design direction.',
    image: '/public/img/service4.jpg',
  },
];
</script>

<style scoped>
/* Paste the styles for the .services-grid, .service-card, etc. here */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(174, 140, 104, 0.2);
}

.service-icon {
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 8px;
}

.service-icon img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>