<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text fade-in">
          <h2>About Thuang Architect</h2>
          <p>
            With over 2 years of experience in interior design, I specialize in creating spaces that are both beautiful and functional. My approach combines timeless design principles with contemporary trends to deliver interiors that truly reflect my clients' personalities.
          </p>
          <p>
            I hold a degree in Interior Architecture from the prestigious Design Institute and have been featured in leading design magazines. My work spans residential and commercial projects, from intimate apartments to luxury homes and boutique hotels.
          </p>
          <div class="credentials">
            <div class="credential">
              <h4>20+</h4>
              <p>Completed Projects</p>
            </div>
            <div class="credential">
              <h4>2+</h4>
              <p>Years Experience</p>
            </div>
            <div class="credential">
              <h4>5★</h4>
              <p>Client Rating</p>
            </div>
          </div>
        </div>
        <div class="about-image fade-in">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Elena Martinez"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Paste the styles for the .about-section, .about-content, etc. here */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.credentials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.credential {
  text-align: center;
}

.credential h4 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.credential p {
  color: var(--gray-medium);
  font-size: 0.9rem;
}

.about-image {
  border-radius: 12px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .credentials {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .credential h4 {
    font-size: 2rem;
  }
}
</style>