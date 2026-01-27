<template>
  <footer class="minimal-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img :src="`${baseUrl}img/Logo Export-32.png`" alt="Thuang Architecture Logo" class="footer-logo" />
        <p class="brand-name">Thuang Architecture</p>
      </div>
      <p class="copyright">© {{ currentYear }} Thuang Architecture. All rights reserved.</p>
      <div class="footer-links">
        <a href="mailto:contact@example.com">contact@example.com</a>
        <span class="separator">|</span>
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
const baseUrl = import.meta.env.BASE_URL;
</script>

<style scoped>
.minimal-footer {
  background: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.footer-logo {
  width: 40px;
  height: auto;
  opacity: 0.9;
}

.brand-name {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0;
}

.copyright {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ae8c68;
}

.separator {
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .minimal-footer {
    padding: 1.5rem 1rem;
  }

  .footer-logo {
    width: 32px;
  }

  .brand-name {
    font-size: 0.9rem;
  }

  .copyright {
    font-size: 0.875rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .separator {
    display: none;
  }

  .footer-links a {
    font-size: 0.875rem;
  }
}
</style>
