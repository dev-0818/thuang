<template>
  <div class="category-selection">
    <!-- Split Screen -->
    <div class="split-container" :class="{ 'expanding-residential': expandingCategory === 'residential', 'expanding-commercial': expandingCategory === 'commercial' }">
      <!-- Residential Side -->
      <button 
        class="split-side residential-side"
        @click="handleSelect('residential')"
        :class="{ 'expanding': expandingCategory === 'residential' }"
      >
        <div class="side-overlay"></div>
        <div class="side-content">
          <div class="title-group">
            <h2>Residential</h2>
            <div v-if="isExpanding && expandingCategory === 'residential'" class="brand-credit-inline">
              <span class="brand-credit">By Thuang Architect</span>
              <img :src="`${baseUrl}img/Logo Export-32.png`" alt="Logo" class="brand-logo-small" />
            </div>
          </div>
          
          <div class="explore-arrow" :class="{ 'hidden': isExpanding }">
            <span>Explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </button>

      <!-- Commercial Side -->
      <button 
        class="split-side commercial-side"
        @click="handleSelect('commercial')"
        :class="{ 'expanding': expandingCategory === 'commercial' }"
      >
        <div class="side-overlay"></div>
        <div class="side-content">
          <div class="title-group">
            <h2>Commercial</h2>
            <div v-if="isExpanding && expandingCategory === 'commercial'" class="brand-credit-inline">
              <span class="brand-credit">By Thuang Architect</span>
              <img :src="`${baseUrl}img/Logo Export-32.png`" alt="Logo" class="brand-logo-small" />
            </div>
          </div>
          
          <div class="explore-arrow" :class="{ 'hidden': isExpanding }">
            <span>Explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  selectCategory: [category: 'residential' | 'commercial']
}>()

const expandingCategory = ref<'residential' | 'commercial' | null>(null)
const isExpanding = ref(false)
const hasInteracted = ref(false)

function handleSelect(category: 'residential' | 'commercial') {
  expandingCategory.value = category
  isExpanding.value = true
  
  // Wait for animation to complete before emitting
  setTimeout(() => {
    emit('selectCategory', category)
  }, 1500) // Match with CSS animation duration
}

function handleInteraction() {
  hasInteracted.value = true
}

onMounted(() => {
  window.addEventListener('scroll', handleInteraction, { once: true })
  window.addEventListener('touchstart', handleInteraction, { once: true })
  window.addEventListener('click', handleInteraction, { once: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleInteraction)
  window.removeEventListener('touchstart', handleInteraction)
  window.removeEventListener('click', handleInteraction)
})

const baseUrl = import.meta.env.BASE_URL;
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap');

.category-selection {
  min-height: 100vh;
  height: 100vh;
  position: relative;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-margin-top: 0;
}

/* Brand Overlay - Center positioned */
.brand-credit-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: brandFadeIn 0.5s ease-out;
}

@keyframes brandFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.brand-credit {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  margin: 0;
}

.footer-logo {
  width: 48px;
  height: auto;
  opacity: 0.9;
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3));
}

/* Split Container */
.split-container {
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
}

/* Expanding States - Animate from hover to full screen */
.split-container.expanding-residential .residential-side {
  animation: expandToFull 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.split-container.expanding-commercial .commercial-side {
  animation: expandToFull 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.split-container.expanding-residential .commercial-side,
.split-container.expanding-commercial .residential-side {
  animation: shrinkToZero 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes expandToFull {
  from {
    flex: 1.15;
  }
  to {
    flex: 20;
  }
}

@keyframes shrinkToZero {
  from {
    flex: 0.85;
  }
  to {
    flex: 0;
  }
}

.split-side {
  flex: 1;
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  transition: flex 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover Effect - Expand slightly */
.split-side:hover {
  flex: 1.15;
}

.split-container:has(.residential-side:hover) .commercial-side,
.split-container:has(.commercial-side:hover) .residential-side {
  flex: 0.85;
}

/* Background Images & Overlays */
.residential-side {
  background: linear-gradient(135deg, #3a3a3a 0%, #2c2c2c 100%);
  position: relative;
}

.commercial-side {
  background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
  position: relative;
}

.side-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(174, 140, 104, 0.15) 0%, rgba(174, 140, 104, 0.25) 100%);
  transition: all 0.6s ease;
}

.split-side:hover .side-overlay {
  background: linear-gradient(135deg, rgba(174, 140, 104, 0.25) 0%, rgba(174, 140, 104, 0.35) 100%);
}

/* Content */
.side-content {
  text-align: center;
  color: white;
  z-index: 2;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

/* Disable all transitions and transformations during expansion */
.split-side.expanding .side-content {
  transition: none !important;
  transform: none !important;
}

.title-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-credit-inline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  animation: brandFadeIn 1s ease-out 0.3s both;
}

.brand-credit {
  font-family: 'Dancing Script', cursive;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.05em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  margin: 0;
}

.brand-logo-small {
  width: 24px;
  height: auto;
  opacity: 0.9;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

@keyframes brandFadeIn {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.split-side:hover .side-content {
  transform: scale(1.05);
}

/* Remove hover effect when expanding */
.split-side.expanding:hover .side-content {
  transform: none !important;
}

/* Keep text centered and static during expansion */
.split-side.expanding .side-content {
  transform: none !important;
}

.category-icon {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.split-side:hover .category-icon {
  color: #d4b896;
  transform: translateY(-10px);
}

.side-content h2 {
  font-size: 3rem;
  font-weight: 300;
  color: white;
  margin: 0 0 1rem 0;
  letter-spacing: 0.05em;
  transition: all 0.4s ease;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.side-content h2.hidden {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.split-side:hover .side-content h2 {
  color: #d4b896;
  letter-spacing: 0.1em;
}

.side-content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  margin: 0 0 2rem 0;
  letter-spacing: 0.05em;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

.split-side:hover .side-content p {
  opacity: 1;
  transform: translateY(0);
}

.explore-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  color: #d4b896;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.explore-arrow.hidden {
  opacity: 0 !important;
}

.split-side:hover .explore-arrow {
  opacity: 1;
  transform: translateY(0);
}

.side-content p.hidden {
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .side-content {
    gap: 1.5rem;
  }

  .title-group {
    gap: 0.75rem;
  }

  .brand-credit {
    font-size: 1rem;
  }

  .brand-logo-small {
    width: 20px;
  }

  .split-container {
    flex-direction: column;
  }

  .split-side {
    flex: 1;
    min-height: 50vh;
  }

  .split-side:hover {
    flex: 1.05;
  }

  .split-container:has(.residential-side:hover) .commercial-side,
  .split-container:has(.commercial-side:hover) .residential-side {
    flex: 0.95;
  }

  /* Expanding animations for mobile */
  .split-container.expanding-residential .residential-side,
  .split-container.expanding-commercial .commercial-side {
    animation: expandToFullMobile 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .split-container.expanding-residential .commercial-side,
  .split-container.expanding-commercial .residential-side {
    animation: shrinkToZeroMobile 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes expandToFullMobile {
    from {
      flex: 1.05;
      min-height: 50vh;
    }
    to {
      flex: 20;
      min-height: 100vh;
    }
  }

  @keyframes shrinkToZeroMobile {
    from {
      flex: 0.95;
    }
    to {
      flex: 0;
      min-height: 0;
    }
  }

  .side-content h2 {
    font-size: 2.5rem;
  }

  .side-content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .side-content h2 {
    font-size: 2rem;
  }

  .side-content p {
    font-size: 0.95rem;
  }
}
</style>
