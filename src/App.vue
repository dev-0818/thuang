<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <PortfolioSection @open-modal="openModal" />
    <AboutSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <PortfolioModal :project="selectedProject" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Import all the new components
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import AboutSection from './components/AboutSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
import PortfolioModal from './components/PortfolioModal.vue';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const selectedProject = ref<Project | null>(null);

const openModal = (project: Project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in');
  elementsToAnimate.forEach((el) => observer.observe(el));
});
</script>

<style>
/* Global styles and utility classes */
:root {
  --primary-color: #ae8c68;
  --text-dark: #2c3e50;
  --gray-medium: #6c7a89;
  --gray-light: #f5f5f5;
  --white: #ffffff;
}

::-webkit-scrollbar {
  width: 10px; /* Set the width of the scrollbar */
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--gray-light); /* Background color of the scrollbar track */
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-color); /* Color of the scrollbar handle */
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #96785e; /* Slightly darker shade on hover */
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--white);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 6rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
  border: 1px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-color);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: var(--white);
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }

  .section-title h2 {
    font-size: 2rem;
  }
}
</style>