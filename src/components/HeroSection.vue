<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content fade-in">
        <h1>Transform Your Space Into Something Extraordinary</h1>
        <p>Award-winning interior designer creating beautiful, functional spaces that reflect your unique style and enhance your daily life.</p>
        <div class="hero-buttons">
          <a href="#contact" class="btn btn-primary">Start Your Project</a>
          <a href="#portfolio" class="btn btn-outline">View Portfolio</a>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <img
        src="/public/img/firstSection.jpg"
        alt="Beautiful interior design"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// You can remove any script logic from here since it was just data
// The fade-in animation logic will be moved to the main App.vue
</script>

<style scoped>
/* Paste the styles for the .hero, .hero-content, etc. here */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f6f3 0%, #ebe6e0 100%);
}

.hero-content {
  max-width: 50%;
  z-index: 2;
}

.hero-content h1 {
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.hero-content p {
  font-size: 1.2rem;
  color: var(--gray-medium);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 6rem 0 2rem;
  }

  .hero-content {
    max-width: 100%;
    order: 2;
    margin-top: 2rem;
  }

  .hero-image {
    position: relative;
    width: 100%;
    height: 300px;
    order: 1;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>