<template>
  <nav
    class="navbar"
    :class="{ 'navbar-scrolled': scrolled, 'navbar-transparent': transparentNav }"
  >
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <img src="/public/img/Logo23.png" alt="Thuang Architect Logo" />
        </div>
        <div class="nav-links" :class="{ active: mobileMenuOpen }">
          <a href="#home" @click="closeMenu">Home</a>
          <a href="#services" @click="closeMenu">Services</a>
          <a href="#portfolio" @click="closeMenu">Portfolio</a>
          <a href="#about" @click="closeMenu">About</a>
          <a href="#contact" @click="closeMenu">Contact</a>
        </div>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const transparentNav = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;

  const homeSection = document.getElementById('home');
  if (homeSection) {
    const homeTop = homeSection.offsetTop;
    const homeBottom = homeTop + homeSection.offsetHeight;
    const currentScroll = window.scrollY + 100;

    transparentNav.value = !(currentScroll >= homeTop && currentScroll <= homeBottom);
  } else {
    transparentNav.value = true;
  }
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Paste the styles for the .navbar, .nav-content, etc. here */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 0;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* 
.navbar-transparent {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
} */

.navbar-transparent .nav-content {
  padding: 0.5rem 0;
}

.navbar-transparent .logo h3 {
  font-size: 1.3rem;
}

.navbar-transparent .nav-links a {
  font-size: 0.9rem;
  transition: all 0.5s ease;
}

.navbar-transparent .logo img{
  height: 40px; /* Or whatever height you've set for your navbar */
  transition: all 0.5s ease;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  transition: all 0.5s ease;
}

.logo {
  /* This ensures the logo container has a flexible height */
  display: flex;
  align-items: center;
}


.logo h3 {
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
}

.logo img {
  /* Set the height of the image to match the height of the navbar */
  height: 50px; /* Or whatever height you've set for your navbar */
  /* This ensures the image scales proportionally and doesn't get distorted */
  width: auto;
  transition: all 0.5s ease;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
   transition: all 0.5s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  transition: 0.3s;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white);
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-links.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>