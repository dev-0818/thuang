<template>
  <section class="section testimonials-section">
    <div class="container">
      <div class="section-title fade-in">
        <h2>Client Testimonials</h2>
        <p>Don't just take my word for it - hear what my clients have to say about working with me.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card fade-in" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="quote">"</div>
          <p>{{ testimonial.text }}</p>
          <div class="author">
            <h4>{{ testimonial.author }}</h4>
            <span>{{ testimonial.project }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  id: number;
  text: string;
  author: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Elena transformed our home beyond our wildest dreams. Her attention to detail and ability to understand our vision was remarkable. We couldn't be happier with the results!",
    author: 'Sarah Johnson',
    project: 'Full Home Renovation',
  },
  {
    id: 2,
    text: "Working with Elena was an absolute pleasure. She managed to create a space that is both beautiful and functional for our growing family. Highly recommended!",
    author: 'Michael Chen',
    project: 'Kitchen & Living Room Redesign',
  },
  {
    id: 3,
    text: "Elena's expertise in commercial design helped us create an office space that truly reflects our brand. Our employees love coming to work now!",
    author: 'Lisa Rodriguez',
    project: 'Corporate Office Design',
  },
];
</script>

<style scoped>
/* Paste the styles for the .testimonials-section, .testimonials-grid, etc. here */
.testimonials-section {
  background: var(--gray-light);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.testimonial-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  position: relative;
}

.quote {
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.3;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-family: Georgia, serif;
}

.testimonial-card p {
  font-style: italic;
  margin-bottom: 1.5rem;
  padding-top: 2rem;
}

.author h4 {
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.author span {
  color: var(--gray-medium);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>