<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Thuang Architect</h3>
          <p>Creating beautiful, functional spaces that inspire and delight.</p>
        </div>
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Residential Design</li>
            <li>Commercial Interiors</li>
            <li>Space Planning</li>
            <li>Design Consultation</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Follow Me</h4>
          <div class="social-links">
            <a href="https://www.instagram.com/thuangarchitect?igsh=MXVlNGJhYWEwN2E3ag==" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Thuang Architect Interior Design. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Paste the styles for the .footer, .footer-content, etc. here */
.footer {
  background: var(--text-dark);
  color: var(--white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}
</style>